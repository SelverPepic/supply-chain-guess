import React, { useEffect, useMemo, useState } from 'react'
import { WORLD_COUNTRIES } from './worldMapData.js'
import { OBJECTS } from './objects.js'
import { resolveGuess } from './guessMatching.js'
import { compareClassification, profileForAnswer, reviewGuessVerdict } from './guessAgent.js'

const PALETTE = ['#20c997', '#339af0', '#ffb224', '#f06595', '#845ef7', '#ff6b6b', '#51cf66', '#22b8cf', '#fcc419', '#748ffc', '#e599f7', '#ffa94d']
const STAGE_COLORS = { source: '#20c997', component: '#339af0', assembly: '#ff6b6b', logistics: '#845ef7', buyer: '#ffb224', waste: '#e599f7' }
const MAP_LAYERS = [
  ['source', 'Raw materials'], ['component', 'Components'], ['assembly', 'Production'],
  ['logistics', 'Logistics'], ['buyer', 'Buyers'], ['waste', 'Waste / disposal'],
]
function shuffledObjectIds() {
  const ids = OBJECTS.map(object => object.id)
  for (let index = ids.length - 1; index > 0; index -= 1) {
    const random = globalThis.crypto?.getRandomValues
      ? globalThis.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296
      : Math.random()
    const swap = Math.floor(random * (index + 1))
    ;[ids[index], ids[swap]] = [ids[swap], ids[index]]
  }
  return ids
}

function partition(items, x = 0, y = 0, width = 100, height = 100) {
  if (!items.length) return []
  if (items.length === 1) return [{ ...items[0], x, y, width, height }]
  const total = items.reduce((sum, item) => sum + item.value, 0)
  let running = 0, split = 1, best = Infinity
  for (let index = 1; index < items.length; index += 1) {
    running += items[index - 1].value
    const difference = Math.abs(total / 2 - running)
    if (difference < best) { best = difference; split = index }
  }
  const first = items.slice(0, split), second = items.slice(split)
  const ratio = first.reduce((sum, item) => sum + item.value, 0) / total
  if (width >= height) return [...partition(first, x, y, width * ratio, height), ...partition(second, x + width * ratio, y, width * (1 - ratio), height)]
  return [...partition(first, x, y, width, height * ratio), ...partition(second, x, y + height * ratio, width, height * (1 - ratio))]
}

function RectangleShareChart({ rows, ariaLabel, mode = 'share', tall = false }) {
  const items = useMemo(() => rows.map(([name, value, color, details], index) => ({ name, value, details: details || [], color: color || PALETTE[index % PALETTE.length] })), [rows])
  const total = items.reduce((sum, item) => sum + item.value, 0)
  const rectangles = useMemo(() => partition(items), [items])
  const display = value => {
    if (mode === 'mass') return `${value < 0.01 ? value.toFixed(4) : value < 1 ? value.toFixed(2) : value.toFixed(value % 1 ? 2 : 0)} g`
    if (mode === 'cost') return value < 0.01 ? '<$0.01' : `$${value.toFixed(2)}`
    return `${value.toFixed(value % 1 ? 1 : 0)}%`
  }
  return <div className={`sc-rect-chart ${tall ? 'tall' : ''}`}>
    <div className="sc-rect-plot" role="img" aria-label={ariaLabel}>
      {rectangles.map(rect => {
        const share = rect.value / total * 100
        return <div className="sc-rect" key={rect.name} title={`${rect.name}: ${display(rect.value)}`} style={{ left: `${rect.x}%`, top: `${rect.y}%`, width: `${rect.width}%`, height: `${rect.height}%`, backgroundColor: rect.color }}>
          {share >= 4 && <span><b>{rect.name}</b>{rect.details.length > 0 && <small className="sc-rect-materials">{rect.details.slice(0, 2).join(' · ')}</small>}<small>{display(rect.value)}</small></span>}
        </div>
      })}
    </div>
    <div className={`sc-rect-list ${mode === 'mass' || mode === 'cost' ? 'mass' : ''}`}>
      {items.map(item => <div key={item.name}><i style={{ backgroundColor: item.color }} /><span className="sc-rect-list-copy"><span>{item.name}</span>{item.details.length > 0 && <small>{item.details.join(' · ')}</small>}</span><b>{display(item.value)}</b></div>)}
    </div>
  </div>
}

function SupplyMap({ answer }) {
  const mapLayers = useMemo(() => MAP_LAYERS.filter(([key]) => key !== 'component' || answer.stages.components?.length), [answer])
  const componentCountryIds = useMemo(() => new Set((answer.stages.components || []).map(row => row[4]).filter(Boolean)), [answer])
  const [visibleLayers, setVisibleLayers] = useState(() => mapLayers.map(([key]) => key))
  useEffect(() => setVisibleLayers(mapLayers.map(([key]) => key)), [answer.id, mapLayers])
  const toggleLayer = layer => setVisibleLayers(current => current.includes(layer) ? current.filter(item => item !== layer) : [...current, layer])
  const countries = WORLD_COUNTRIES.map(country => {
    const storedRoles = (answer.mapRoles[country.id] || []).filter(role => role !== 'component')
    const roles = componentCountryIds.has(country.id) ? [...storedRoles, 'component'] : storedRoles
    return { ...country, roles: roles.filter(role => visibleLayers.includes(role)) }
  })
  const labels = answer.mapLabels || []
  return <div>
    <div className="sc-map-controls" aria-label="Map categories">{mapLayers.map(([key, label]) => {
      const active = visibleLayers.includes(key)
      return <button key={key} type="button" className={active ? 'active' : ''} aria-pressed={active} onClick={() => toggleLayer(key)} style={{ '--layer-color': STAGE_COLORS[key] }}><i />{label}</button>
    })}<button type="button" className="sc-show-all" onClick={() => setVisibleLayers(mapLayers.map(([key]) => key))}>Show all</button><button type="button" className="sc-show-all" onClick={() => setVisibleLayers([])}>Show none</button><span><i />Striped = multiple selected roles</span></div>
    <div className="sc-map-wrap">
      <svg className="sc-map" viewBox="0 0 1000 500" role="img" aria-label="World map with selectable material, component, production, logistics, buying and waste stages">
        <defs>{countries.filter(country => country.roles.length > 1).map(country => {
          const roles = country.roles
          return <pattern key={country.id} id={`stripe-${answer.id}-${country.id}`} width={roles.length * 8} height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            {roles.map((role, index) => <rect key={role} x={index * 8} width="8" height="8" fill={STAGE_COLORS[role]} />)}
          </pattern>
        })}</defs>
        <g className="sc-countries">{countries.map(country => {
          const fill = country.roles.length > 1 ? `url(#stripe-${answer.id}-${country.id})` : country.roles.length ? STAGE_COLORS[country.roles[0]] : '#1b252c'
          return <path key={country.id} d={country.d} className="sc-country" style={{ '--country-fill': fill }} />
        })}</g>
        <g className="sc-map-labels">{labels.filter(([, , , stage]) => visibleLayers.includes(stage)).map(([name, x, y, stage]) => <g key={`${name}-${stage}`} transform={`translate(${x} ${y})`}><circle r="5" style={{ fill: STAGE_COLORS[stage] }} /><text y="-10">{name}</text></g>)}</g>
      </svg>
      <div className="sc-map-note">Borders: Natural Earth · select any combination above</div>
    </div>
  </div>
}

function EvidenceCard({ id, eyebrow, title, note, limitations, children, className = '' }) {
  return <section id={id} className={`sc-card ${className}`}><header><span>{eyebrow}</span><h2>{title}</h2></header>{children}{note && <p className="sc-caption">{note}</p>}{limitations && <details className="sc-limitations"><summary>Data limitations</summary><p>{limitations}</p></details>}</section>
}

function tokenScope(token) {
  if (!token || typeof token !== 'string') return ''
  try {
    const segment = token.split('.')[1]
    if (!segment) return ''
    const normalized = segment.replace(/-/g, '+').replace(/_/g, '/')
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=')
    return JSON.parse(atob(padded)).scope || ''
  } catch {
    return ''
  }
}

export default function App({ appId, token }) {
  const [objectOrder] = useState(shuffledObjectIds)
  const [objectId, setObjectId] = useState(() => objectOrder[0] || OBJECTS[0].id)
  const [showHowTo, setShowHowTo] = useState(false)
  const [selection, setSelection] = useState(''), [guessError, setGuessError] = useState(''), [guesses, setGuesses] = useState([]), [done, setDone] = useState(false), [reviewingKey, setReviewingKey] = useState(null)
  const answer = OBJECTS.find(object => object.id === objectId) || OBJECTS[0]
  const answerProfile = profileForAnswer(answer)
  const materials = useMemo(() => answer.materials.map(([name, mass, usdPerKg], index) => ({ name, mass, usdPerKg, color: PALETTE[index % PALETTE.length] })), [answer])
  const materialMass = useMemo(() => materials.map(item => [item.name, item.mass, item.color]), [materials])
  const materialCost = useMemo(() => materials.map(item => [item.name, item.mass / 1000 * item.usdPerKg, item.color]).sort((a, b) => b[1] - a[1]), [materials])
  const totalMass = materials.reduce((sum, item) => sum + item.mass, 0)
  const displayMass = Math.round(totalMass * 100) / 100
  const totalCost = materialCost.reduce((sum, item) => sum + item[1], 0)
  const hasComponents = Boolean(answer.stages.components?.length)
  const remaining = 5 - guesses.length
  const canReview = tokenScope(token) === 'app'
  useEffect(() => {
    if (!document.head.querySelector('meta[name="darkreader-lock"]')) {
      const lock = document.createElement('meta'); lock.name = 'darkreader-lock'; document.head.appendChild(lock)
    }
  }, [])
  function submit(event) {
    event.preventDefault(); if (!selection.trim() || done) return
    const guessText = selection.trim().replace(/\s+/g, ' ').slice(0, 180)
    const guessKey = guessText.toLocaleLowerCase()
    if (guesses.some(guess => guess.key === guessKey)) { setGuessError(`You already tried “${guessText}”.`); return }
    const matchedObject = resolveGuess(guessText, OBJECTS)
    const isCorrect = matchedObject?.name === answer.name
    setGuessError('')
    if (isCorrect) {
      setGuesses(current => [...current, { key: guessKey, name: guessText, result: compareClassification(answerProfile, {
        category: answer.category, materials: answer.guessMaterials, portable: answer.portable,
        powered: answer.powered, setting: answer.setting, massGrams: answerProfile.massGrams,
      }), correct: true, reviewStatus: 'not-needed' }])
      setSelection(''); setDone(true); return
    }
    const feedbackIndex = Math.min(guesses.filter(guess => !guess.correct).length, answer.feedback.length - 1)
    setGuesses(current => [...current, {
      key: guessKey, name: guessText, correct: false, result: null,
      feedback: answer.feedback[feedbackIndex], feedbackNumber: feedbackIndex + 1,
      reviewStatus: canReview ? 'idle' : 'public-unavailable', reviewError: '',
    }])
    setSelection('')
    if (guesses.length === 4) setDone(true)
  }
  async function reviewVerdict(index) {
    const guess = guesses[index]
    if (!guess || guess.correct || reviewingKey) return
    setReviewingKey(guess.key)
    setGuesses(current => current.map((item, itemIndex) => itemIndex === index ? { ...item, reviewStatus: 'running', reviewError: '' } : item))
    try {
      const review = await reviewGuessVerdict({ appId, token, guess: guess.name, answer })
      const result = compareClassification(answerProfile, review.classification, review.categorySimilarity)
      setGuesses(current => current.map((item, itemIndex) => itemIndex === index ? {
        ...item,
        correct: review.equivalent,
        result,
        reviewStatus: review.equivalent ? 'accepted' : 'confirmed',
        reviewConfidence: review.confidence,
      } : item))
      if (review.equivalent) setDone(true)
    } catch (error) {
      setGuesses(current => current.map((item, itemIndex) => itemIndex === index ? {
        ...item, reviewStatus: 'error', reviewError: error?.message || 'The review could not be completed. The local verdict is unchanged.',
      } : item))
    } finally {
      setReviewingKey(null)
    }
  }
  function reset() { setSelection(''); setGuessError(''); setGuesses([]); setDone(false); setReviewingKey(null) }
  function nextObject() {
    const index = objectOrder.indexOf(answer.id)
    setObjectId(objectOrder[(index + 1) % objectOrder.length])
    reset()
  }
  const won = guesses.some(guess => guess.correct)
  return <main className="sc-root"><style>{CSS}</style><div className="sc-shell">
    <header className="sc-top"><div className="sc-brand"><span className="sc-mark"><i/><i/><i/></span><span>Supply Chain Guesser</span></div><button type="button" className="sc-how-toggle" aria-expanded={showHowTo} aria-controls="how-to-play" onClick={() => setShowHowTo(open => !open)}>{showHowTo ? 'Close guide' : 'How to play'}<span aria-hidden="true">{showHowTo ? '−' : '+'}</span></button></header>
    {showHowTo && <section className="sc-how-to" id="how-to-play"><div><span className="sc-how-kicker">Quick guide</span><h2>Follow the journey. Name the object.</h2><p>Study the evidence without revealing the answer, then type any everyday object. You have five guesses, and every miss unlocks one of four progressively clearer clues.</p></div><ol><li><b>Read the evidence</b><span>Compare material mass and value, source countries, production, trade, buyers and end of life.</span></li><li><b>Use the map</b><span>Toggle stages; stripes show countries with several selected roles.</span></li><li><b>Check the feedback</b><span>Built-in clues work everywhere. Signed-in players can optionally ask an AI reviewer to reconsider a synonym or matching subtype without revealing the answer.</span></li></ol></section>}
    <section className="sc-hero"><div><p className="sc-kicker">Mystery object · {answer.descriptor}</p><h1>What object made<br/>this <em>global journey?</em></h1><p className="sc-dek">Read the materials, countries and routes. You have five guesses; every miss reveals another clue.</p></div><div className="sc-orbit" aria-hidden="true"><div className="sc-object-ghost"><span/><span/><span/></div><i className="dot a"/><i className="dot b"/><i className="dot c"/></div></section>
    <form className="sc-guess" onSubmit={submit}><div className="sc-guess-meta"><label htmlFor="object-guess">Your guess</label><div className="sc-guess-actions"><button type="button" className="sc-new-object" onClick={nextObject}>New object</button><div className="sc-counter" aria-label={`${remaining} guesses remaining`}><b>{remaining}</b><span>guesses left</span></div></div></div><input id="object-guess" value={selection} onChange={event => { setSelection(event.target.value); if (guessError) setGuessError('') }} disabled={done} placeholder="Type any everyday object…" autoComplete="off" spellCheck="true" aria-invalid={!!guessError} aria-describedby={guessError ? 'guess-error' : undefined} /><button className="sc-check-guess" disabled={!selection.trim() || done}>Check guess</button>{guessError && <p className="sc-guess-error" id="guess-error" role="alert">{guessError}</p>}</form>
    {(guesses.length > 0 || done) && <section className="sc-results" aria-live="polite">
      {guesses.map((guess, index) => <div className={`sc-result ${guess.correct ? 'win' : ''}`} key={`${guess.key}-${index}`}><span className="sc-number">0{index + 1}</span><div className="sc-result-head"><strong>{guess.name}</strong><span className={`sc-verdict ${guess.correct ? 'correct' : 'wrong'}`}>{guess.correct ? guess.reviewStatus === 'accepted' ? 'Review accepted · correct' : 'Correct' : 'Marked wrong'}</span></div>{!guess.correct && <div className="sc-local-feedback"><span>Feedback {guess.feedbackNumber} of {answer.feedback.length}</span><p>{guess.feedback}</p></div>}{guess.result && <div className="sc-feedback"><span className={`sc-tag category-${guess.result.category}`}>Category {({ same: 'same', very_similar: 'very similar', similar: 'similar', different: 'different', very_different: 'very different' })[guess.result.category] || 'different'}</span><span className={`sc-tag ${guess.result.materials}`}>Materials {guess.result.overlap}/5</span><span className={`sc-tag ${guess.result.portable}`}>{guess.result.portable === 'correct' ? 'Portability matches' : guess.result.portable === 'close' ? 'Portability uncertain' : answer.portable ? 'Answer is portable' : 'Answer stays put'}</span><span className={`sc-tag ${guess.result.powered}`}>{guess.result.powered === 'correct' ? answer.powered ? 'Powered match' : 'Unpowered match' : guess.result.powered === 'close' ? 'Power use uncertain' : answer.powered ? 'Answer is powered' : 'Answer is unpowered'}</span><span className={`sc-tag ${guess.result.setting}`}>{guess.result.setting === 'correct' ? 'Use setting matches' : `Used for ${answer.setting}`}</span><span className={`sc-tag ${guess.result.mass}`}>{guess.result.massLabel}</span></div>}{!guess.correct && <div className="sc-review"><div><b>{guess.reviewStatus === 'confirmed' ? 'Helper confirmed the verdict' : guess.reviewStatus === 'public-unavailable' ? 'AI review requires the signed-in app' : guess.reviewStatus === 'error' ? 'Review unavailable' : 'Could this have been accepted?'}</b><p>{guess.reviewStatus === 'confirmed' ? `The helper found this refers to a different object (${guess.reviewConfidence} confidence).` : guess.reviewStatus === 'public-unavailable' ? 'Public play includes all four built-in clues, but anonymous sessions cannot start an AI reviewer.' : guess.reviewStatus === 'error' ? guess.reviewError : 'Optional: ask a helper to check whether your wording is a synonym, regional name, brand, or matching subtype.'}</p></div>{canReview && guess.reviewStatus !== 'confirmed' && <button type="button" onClick={() => reviewVerdict(index)} disabled={guess.reviewStatus === 'running' || !!reviewingKey}>{guess.reviewStatus === 'running' ? 'Reviewing…' : guess.reviewStatus === 'error' ? 'Try review again' : 'Review this verdict'}</button>}</div>}</div>)}
      {done && <div className={`sc-finish ${won ? 'won' : ''}`}><div><span>{won ? 'Supply chain solved' : 'The object was'}</span><h2>{answer.name}</h2><p>{won ? `You connected the clues in ${guesses.length} ${guesses.length === 1 ? 'guess' : 'guesses'}.` : 'Follow the evidence once more and try for a cleaner run.'}</p></div><div className="sc-finish-actions"><button type="button" onClick={nextObject}>Play again</button></div></div>}
    </section>}
    <div className="sc-grid">
      <EvidenceCard eyebrow="01 · Mass composition" title={`Material mass · ${displayMass < 1000 ? `${displayMass.toFixed(displayMass % 1 ? 1 : 0)} g` : `${(displayMass / 1000).toFixed(2)} kg`} total`} note="A reconciled reference model. Every modeled quantity—including trace materials—is listed below." limitations="This is a synthetic reference object, not a teardown or recipe for one commercial product. Formulations, sizes and moisture content can vary; broad material classes are decomposed using literature estimates, and trace quantities are rounded."><RectangleShareChart rows={materialMass} ariaLabel="Rectangular chart of material mass" mode="mass" tall /></EvidenceCard>
      <EvidenceCard eyebrow="02 · Value" title={`Materials ~$${totalCost.toFixed(2)} · Product ${answer.finishedPrice.range}`} note={`Indicative input value versus a typical new-product range. ${answer.finishedPrice.basis}`} limitations="Reference commodity and retail prices fluctuate. Finished prices vary by country, tax, brand, quality, size, sales channel and configuration; raw-material estimates exclude processing losses, labor, transport, taxes and margins."><RectangleShareChart rows={materialCost} ariaLabel="Rectangular chart of estimated raw material value" mode="cost" tall /></EvidenceCard>
      <EvidenceCard id="raw-material-sources" eyebrow="03 · Extraction" title="Raw material sources" note="The two leading materials appear inside larger rectangles; the list below keeps the fuller country detail." limitations="This blends national production concentration across several inputs. It is not supplier-level procurement data: producers may use different origins, recycled feedstock, traders and processors, and sourcing changes over time."><RectangleShareChart rows={answer.stages.sources} ariaLabel="Rectangular chart of raw material source countries and their materials" /></EvidenceCard>
      {hasComponents && <EvidenceCard id="components-processing" eyebrow="04 · Intermediate stage" title="Components & processing" note="The two leading intermediate parts or processed inputs appear inside larger rectangles; the complete country detail remains visible below." limitations="These are directional shares across unlike parts and processing steps, not a bill of materials or a traceable supplier list. A country can specialize in several inputs, and components may cross borders more than once before final production."><RectangleShareChart rows={answer.stages.components} ariaLabel="Rectangular chart of component and processing countries" /></EvidenceCard>}
      <EvidenceCard eyebrow={`${hasComponents ? '05' : '04'} · Production`} title="Producing countries" note="Illustrative share of global final production or assembly." limitations="Production shares vary by company, product type and year. Public trade data may group related goods and can record the exporting country rather than the site that performed the decisive manufacturing step."><RectangleShareChart rows={answer.stages.assembly} ariaLabel="Rectangular chart of producing countries" /></EvidenceCard>
      <EvidenceCard eyebrow={`${hasComponents ? '06' : '05'} · Distribution`} title="Logistics & re-export hubs" note="Indicative role in routing the finished object through global trade." limitations="Re-export statistics identify trading hubs, not a single physical route. Goods may be counted more than once, pass through unreported ports, or be booked in one jurisdiction while moving through another."><RectangleShareChart rows={answer.stages.logistics} ariaLabel="Rectangular chart of logistics and transport countries" /></EvidenceCard>
      <EvidenceCard eyebrow={`${hasComponents ? '07' : '06'} · Demand`} title="Buying countries" note="Indicative share of final demand, grouped for play." limitations="This is a demand proxy rather than audited unit sales. Retail imports, domestic use, inventories, tourism and second-hand trade do not align perfectly, and market shares change throughout the year."><RectangleShareChart rows={answer.stages.buyers} ariaLabel="Rectangular chart of buying countries" /></EvidenceCard>
      <EvidenceCard eyebrow={`${hasComponents ? '08' : '07'} · End of life`} title="Where discarded objects end up" note="Directional proxy for where the object is discarded, collected, reused, recycled or informally handled." limitations="These are not traceable disposal shares for one object. Household storage, reuse, mixed waste, food loss, informal handling and cross-border shipments create substantial reporting gaps, so the country split is intentionally approximate."><RectangleShareChart rows={answer.stages.waste} ariaLabel="Rectangular chart of likely end-of-life countries" /></EvidenceCard>
      <EvidenceCard eyebrow={`${hasComponents ? '09' : '08'} · Global footprint`} title="Where the stages happen" className="sc-wide" limitations="The map combines the panel estimates and illustrative stage roles. Component coloring is generated from the Components & processing panel rather than separate tags. A colored country does not mean this particular object passed through it, and the view does not encode within-country intensity or exact routes."><SupplyMap answer={answer} /></EvidenceCard>
    </div>
    <footer className="sc-footer"><p><b>Prototype note.</b> No generic object has one traceable global route. Material models and country shares are directional estimates for gameplay, informed by product, commodity, trade and waste data.</p><span>{OBJECTS.length} {OBJECTS.length === 1 ? 'object' : 'objects'} · many global stories</span></footer>
  </div></main>
}

const CSS = `
*{box-sizing:border-box}:root{color-scheme:dark;--sc-cyan:#20c997;--sc-blue:#339af0;--sc-gold:#ffb224;--sc-red:#ff6b6b;--sc-violet:#845ef7}
.sc-root{min-height:100%;color:var(--text);background:var(--bg);font-family:var(--font);overflow:auto}.sc-root button,.sc-root input{font:inherit}.sc-shell{width:calc(100% - 36px);margin:auto;padding:22px 0 48px}.sc-top{height:48px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border)}.sc-brand{display:flex;align-items:center;gap:10px;font-weight:760;letter-spacing:-.02em}.sc-mark{display:flex;align-items:flex-end;gap:2px;width:22px;height:22px}.sc-mark i{display:block;width:5px;background:var(--sc-cyan);border-radius:3px}.sc-mark i:nth-child(1){height:9px}.sc-mark i:nth-child(2){height:17px}.sc-mark i:nth-child(3){height:13px}.sc-how-toggle{display:flex;align-items:center;gap:9px;height:34px;padding:0 12px;border:1px solid color-mix(in srgb,var(--sc-cyan) 45%,var(--border));border-radius:8px;background:color-mix(in srgb,var(--sc-cyan) 8%,var(--surface));color:var(--text);font-size:11px;font-weight:760;cursor:pointer}.sc-how-toggle span{display:grid;place-items:center;width:16px;height:16px;border-radius:50%;background:var(--sc-cyan);color:#06261d;font-size:14px}.sc-how-toggle:focus-visible{outline:2px solid var(--sc-cyan);outline-offset:3px}.sc-how-to{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:34px;margin-top:14px;padding:22px;border:1px solid color-mix(in srgb,var(--sc-cyan) 30%,var(--border));border-radius:14px;background:linear-gradient(135deg,color-mix(in srgb,var(--sc-cyan) 9%,var(--surface)),var(--surface))}.sc-how-kicker{color:var(--sc-cyan);font-size:9px;font-weight:800;letter-spacing:.15em;text-transform:uppercase}.sc-how-to h2{margin:7px 0 8px;font-size:22px;letter-spacing:-.035em}.sc-how-to p{margin:0;color:var(--muted);font-size:12px;line-height:1.55}.sc-how-to ol{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;list-style:none;counter-reset:steps;margin:0;padding:0}.sc-how-to li{counter-increment:steps;min-width:0;padding-left:26px;position:relative}.sc-how-to li:before{content:counter(steps);position:absolute;left:0;top:0;display:grid;place-items:center;width:18px;height:18px;border-radius:50%;background:var(--sc-gold);color:#211600;font-size:9px;font-weight:850}.sc-how-to li b{display:block;font-size:11px;margin:2px 0 5px}.sc-how-to li span{display:block;color:var(--muted);font-size:10px;line-height:1.45}.sc-counter{display:flex;align-items:baseline;gap:7px;color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.1em}.sc-counter b{font-size:20px;color:var(--text)}
.sc-hero{min-height:270px;display:grid;grid-template-columns:1.4fr .6fr;align-items:center;position:relative;overflow:hidden}.sc-kicker,.sc-card header span{font-size:11px;text-transform:uppercase;letter-spacing:.16em;color:var(--sc-cyan);font-weight:750}.sc-hero h1{font-size:clamp(40px,6vw,72px);line-height:.96;letter-spacing:-.055em;margin:12px 0 18px;max-width:760px}.sc-hero h1 em{font-style:normal;color:var(--muted)}.sc-dek{max-width:610px;color:var(--muted);font-size:15px;line-height:1.6;margin:0}.sc-orbit{width:210px;height:210px;border:1px solid color-mix(in srgb,var(--sc-cyan) 30%,transparent);border-radius:50%;position:relative;justify-self:end}.sc-orbit:before,.sc-orbit:after{content:"";position:absolute;border-radius:50%;border:1px solid color-mix(in srgb,var(--sc-blue) 20%,transparent)}.sc-orbit:before{inset:24px}.sc-orbit:after{inset:52px}.sc-object-ghost{position:absolute;inset:63px;border:2px solid color-mix(in srgb,var(--text) 32%,transparent);border-radius:15px;transform:rotate(45deg);display:grid;place-items:center}.sc-object-ghost:before,.sc-object-ghost:after{content:"";position:absolute;background:color-mix(in srgb,var(--text) 24%,transparent)}.sc-object-ghost:before{width:70%;height:2px}.sc-object-ghost:after{width:2px;height:70%}.sc-object-ghost span{position:absolute;width:5px;height:5px;border-radius:50%;background:var(--sc-cyan)}.sc-object-ghost span:nth-child(1){top:12px}.sc-object-ghost span:nth-child(2){right:12px}.sc-object-ghost span:nth-child(3){bottom:12px}.sc-orbit .dot{position:absolute;width:8px;height:8px;border-radius:50%;background:var(--sc-gold);box-shadow:0 0 14px var(--sc-gold)}.dot.a{top:20px;left:96px}.dot.b{right:18px;bottom:56px;background:var(--sc-cyan)}.dot.c{left:18px;bottom:48px;background:var(--sc-blue)}
.sc-guess{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;align-items:center;padding:14px;background:var(--surface);border:1px solid var(--border);border-radius:14px;margin:3px 0 18px;box-shadow:0 10px 30px color-mix(in srgb,#000 12%,transparent)}.sc-guess-meta{grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;gap:16px}.sc-guess label{font-size:12px;font-weight:750;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);padding:0 8px}.sc-guess-actions{display:flex;align-items:center;gap:14px}.sc-guess .sc-new-object{height:40px;padding:0 17px;border:0;border-radius:9px;background:var(--sc-gold);color:#211600;font-size:12px;font-weight:820;cursor:pointer;box-shadow:0 5px 16px color-mix(in srgb,var(--sc-gold) 28%,transparent)}.sc-guess .sc-new-object:hover{background:#ffc04b}.sc-guess input{width:100%;height:48px;background:var(--surface-2);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:0 14px;outline:none}.sc-guess input::placeholder{color:var(--muted)}.sc-guess input:focus{border-color:var(--sc-cyan);box-shadow:0 0 0 3px color-mix(in srgb,var(--sc-cyan) 18%,transparent)}.sc-guess input[aria-invalid="true"]{border-color:var(--sc-red)}.sc-guess .sc-check-guess,.sc-finish button{height:48px;border:0;border-radius:9px;padding:0 22px;background:var(--sc-cyan);color:#07251c;font-weight:800;cursor:pointer}.sc-guess button:focus-visible{outline:2px solid var(--sc-cyan);outline-offset:2px}.sc-guess button:disabled{opacity:.35;cursor:not-allowed}.sc-guess-error{grid-column:1/-1;margin:-4px 0 0;color:var(--sc-red);font-size:11px}
.sc-results{margin-bottom:18px}.sc-result{display:grid;grid-template-columns:42px minmax(130px,1fr);gap:9px;align-items:start;padding:12px;background:var(--surface);border:1px solid var(--border);border-radius:10px;margin-top:7px}.sc-result.win{border-color:var(--sc-cyan)}.sc-number{grid-row:1/6;color:var(--muted);font-size:11px;padding-top:2px}.sc-result-head{display:flex;align-items:center;justify-content:space-between;gap:10px}.sc-verdict{flex:0 0 auto;padding:4px 7px;border-radius:5px;font-size:9px;font-weight:800;letter-spacing:.05em;text-transform:uppercase}.sc-verdict.wrong{color:#ffd8d8;background:color-mix(in srgb,var(--sc-red) 18%,var(--surface-2));border:1px solid color-mix(in srgb,var(--sc-red) 40%,var(--border))}.sc-verdict.correct{color:#07251c;background:var(--sc-cyan)}.sc-local-feedback{padding:10px 12px;border-radius:8px;background:color-mix(in srgb,var(--sc-blue) 8%,var(--surface-2));border:1px solid color-mix(in srgb,var(--sc-blue) 25%,var(--border))}.sc-local-feedback span{display:block;margin-bottom:3px;color:var(--sc-blue);font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.sc-local-feedback p{margin:0;font-size:12px;line-height:1.45}.sc-review{display:flex;align-items:center;justify-content:space-between;gap:14px;padding-top:8px;border-top:1px solid var(--border)}.sc-review b{font-size:11px}.sc-review p{margin:2px 0 0;color:var(--muted);font-size:10px;line-height:1.4}.sc-review button{flex:0 0 auto;min-height:36px;padding:7px 11px;border:1px solid color-mix(in srgb,var(--sc-blue) 45%,var(--border));border-radius:7px;background:color-mix(in srgb,var(--sc-blue) 10%,var(--surface-2));color:var(--text);font-size:10px;font-weight:760;cursor:pointer}.sc-review button:disabled{opacity:.5;cursor:wait}.sc-feedback{display:flex;flex-wrap:wrap;gap:6px}.sc-tag{font-size:11px;padding:7px 9px;border-radius:6px;background:var(--surface-2);color:var(--muted);white-space:nowrap}.sc-tag.correct,.sc-tag.category-same{color:#07251c;background:var(--sc-cyan)}.sc-tag.close,.sc-tag.category-very_similar{color:#382700;background:var(--sc-gold)}.sc-tag.category-similar{color:#092744;background:color-mix(in srgb,var(--sc-blue) 58%,white)}.sc-tag.category-very_different{color:#ffd8d8;background:color-mix(in srgb,var(--sc-red) 18%,var(--surface-2));border:1px solid color-mix(in srgb,var(--sc-red) 40%,var(--border))}.sc-finish{display:flex;justify-content:space-between;align-items:center;padding:18px 20px;margin-top:8px;background:color-mix(in srgb,var(--sc-red) 10%,var(--surface));border:1px solid color-mix(in srgb,var(--sc-red) 35%,var(--border));border-radius:12px}.sc-finish.won{background:color-mix(in srgb,var(--sc-cyan) 9%,var(--surface));border-color:color-mix(in srgb,var(--sc-cyan) 40%,var(--border))}.sc-finish span{font-size:10px;text-transform:uppercase;letter-spacing:.14em;color:var(--muted)}.sc-finish h2{margin:2px 0;font-size:28px}.sc-finish p{margin:0;color:var(--muted);font-size:13px}.sc-finish-actions{display:flex;gap:8px}
.sc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;align-items:stretch}.sc-card{height:100%;background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:19px;min-width:0}.sc-card header{display:grid;grid-template-columns:minmax(92px,.28fr) minmax(0,1fr);align-items:start;gap:16px;min-height:46px;margin-bottom:16px}.sc-card header h2{min-height:2.24em;font-size:clamp(15px,1.35vw,19px);line-height:1.12;letter-spacing:-.025em;margin:0}.sc-card header span{font-size:9px;line-height:1.35}.sc-wide{grid-column:1/-1}.sc-caption{font-size:10px;color:var(--muted);margin:13px 0 0}.sc-limitations{margin-top:12px;padding-top:10px;border-top:1px solid color-mix(in srgb,var(--border) 75%,transparent);font-size:10px;color:var(--muted)}.sc-limitations summary{width:max-content;cursor:pointer;color:var(--text);font-size:9px;font-weight:760;letter-spacing:.08em;text-transform:uppercase}.sc-limitations summary:focus-visible{outline:2px solid var(--sc-cyan);outline-offset:3px;border-radius:2px}.sc-limitations p{max-width:900px;margin:9px 0 0;line-height:1.55}.sc-rect-plot{height:210px;position:relative;overflow:hidden;border-radius:9px;background:#10161b;isolation:isolate;forced-color-adjust:none}.sc-rect-chart.tall .sc-rect-plot{height:280px}.sc-rect{position:absolute;border:2px solid #10161b!important;overflow:hidden;forced-color-adjust:none!important;filter:none!important}.sc-rect span{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:10px;color:#07120f!important;text-shadow:0 1px 0 rgba(255,255,255,.22)}.sc-rect b{font-size:12px;line-height:1.15}.sc-rect small{font-size:10px;font-weight:750;margin-top:3px}.sc-rect .sc-rect-materials{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:9px}.sc-rect-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px 15px;margin-top:12px}.sc-rect-list.mass{grid-template-columns:repeat(2,minmax(0,1fr))}.sc-rect-list>div{display:grid;grid-template-columns:8px 1fr auto;gap:7px;align-items:center;min-width:0;padding:5px 0;border-bottom:1px solid color-mix(in srgb,var(--border) 65%,transparent);font-size:10px}.sc-rect-list i{width:7px;height:7px;border-radius:2px;forced-color-adjust:none!important}.sc-rect-list-copy{display:flex;min-width:0;flex-direction:column;gap:2px}.sc-rect-list-copy>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--muted)}.sc-rect-list-copy>small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--text);font-size:8px}.sc-rect-list b{font-size:9px;color:var(--text)}
.sc-map-controls{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-bottom:10px}.sc-map-controls button{display:inline-flex;align-items:center;gap:6px;min-height:30px;padding:5px 9px;border:1px solid var(--border);border-radius:7px;background:var(--surface-2);color:var(--muted);font-size:9px;font-weight:700;cursor:pointer}.sc-map-controls button i{width:8px;height:8px;border-radius:2px;background:var(--layer-color);opacity:.35;forced-color-adjust:none!important}.sc-map-controls button.active{border-color:color-mix(in srgb,var(--layer-color) 65%,var(--border));color:var(--text);background:color-mix(in srgb,var(--layer-color) 12%,var(--surface-2))}.sc-map-controls button.active i{opacity:1}.sc-map-controls button:focus-visible{outline:2px solid var(--sc-cyan);outline-offset:2px}.sc-map-controls .sc-show-all{margin-left:3px;color:var(--text)}.sc-map-controls>span{display:inline-flex;align-items:center;gap:6px;margin-left:auto;color:var(--muted);font-size:9px}.sc-map-controls>span i{width:10px;height:10px;border-radius:2px;background:repeating-linear-gradient(45deg,var(--sc-cyan) 0 3px,var(--sc-red) 3px 6px,#e599f7 6px 9px);forced-color-adjust:none!important}.sc-map-wrap{position:relative;background:#0d1419!important;border:1px solid #33404a!important;border-radius:10px;overflow:hidden;isolation:isolate;forced-color-adjust:none!important}.sc-map{display:block;width:100%;height:auto;max-height:520px;background:#0d1419!important;filter:none!important;forced-color-adjust:none!important}.sc-country{fill:var(--country-fill,#1b252c)!important;stroke:#8b9aa5!important;stroke-width:.72!important;vector-effect:non-scaling-stroke}.sc-map-labels circle{stroke:#0d1419!important;stroke-width:2}.sc-map-labels text{fill:#f4f7f8!important;stroke:#0d1419!important;stroke-width:4px;paint-order:stroke;stroke-linejoin:round;font-size:11px;font-weight:760;text-anchor:middle}.sc-map-note{position:absolute;right:12px;bottom:10px;padding:5px 8px;background:#10191f!important;border:1px solid #56636d!important;border-radius:6px;font-size:9px;color:#d4dde2!important}

.sc-footer{display:flex;justify-content:space-between;gap:30px;border-top:1px solid var(--border);margin-top:18px;padding-top:16px;color:var(--muted);font-size:10px;line-height:1.5}.sc-footer p{max-width:800px;margin:0}.sc-footer span{white-space:nowrap}@media(max-width:720px){.sc-shell{width:calc(100% - 22px);padding-top:10px}.sc-how-toggle{padding:0 9px}.sc-how-to{grid-template-columns:1fr;gap:18px;padding:17px}.sc-how-to ol{grid-template-columns:1fr;gap:14px}.sc-hero{grid-template-columns:1fr;min-height:300px}.sc-hero h1{font-size:44px}.sc-orbit{position:absolute;right:-85px;opacity:.5}.sc-dek{max-width:90%}.sc-guess{grid-template-columns:1fr}.sc-guess-meta{align-items:flex-start;flex-direction:column;gap:9px}.sc-guess-actions{width:100%;justify-content:space-between}.sc-guess label{padding:0}.sc-guess .sc-check-guess{width:100%}.sc-guess-error{grid-column:1}.sc-grid{grid-template-columns:1fr}.sc-wide{grid-column:auto}.sc-result{grid-template-columns:34px 1fr}.sc-review{align-items:flex-start;flex-direction:column}.sc-review button{width:100%}.sc-card{padding:15px}.sc-card header{display:block;min-height:0}.sc-card header h2{min-height:0;margin-top:5px;font-size:19px}.sc-rect-list.mass{grid-template-columns:repeat(2,minmax(0,1fr))}.sc-rect-plot,.sc-rect-chart.tall .sc-rect-plot{height:220px}.sc-map{min-width:720px}.sc-map-wrap{overflow-x:auto}.sc-footer{display:block}.sc-footer span{display:block;margin-top:10px}.sc-finish{align-items:flex-start;gap:14px}}@media(prefers-reduced-motion:no-preference){.sc-orbit{animation:scFloat 7s ease-in-out infinite}}@keyframes scFloat{50%{transform:translateY(-8px) rotate(2deg)}}
`
