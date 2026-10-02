import React, { useEffect, useMemo, useState } from 'react'
import { WORLD_COUNTRIES } from './worldMapData.js'

const ANSWER = { name: 'Smartphone', category: 'Personal tech', portable: true, materials: ['Copper', 'Cobalt', 'Lithium', 'Silicon', 'Rare earths'] }
const OBJECTS = [
  { name: 'Bicycle', category: 'Mobility', portable: false, materials: ['Aluminum', 'Steel', 'Rubber'] },
  { name: 'Coffee maker', category: 'Home appliance', portable: false, materials: ['Aluminum', 'Copper', 'Plastic'] },
  { name: 'Electric car', category: 'Mobility', portable: false, materials: ['Lithium', 'Cobalt', 'Copper', 'Steel'] },
  { name: 'Headphones', category: 'Personal tech', portable: true, materials: ['Copper', 'Rare earths', 'Plastic'] },
  { name: 'Laptop', category: 'Personal tech', portable: true, materials: ['Copper', 'Cobalt', 'Lithium', 'Silicon'] },
  { name: 'Refrigerator', category: 'Home appliance', portable: false, materials: ['Steel', 'Copper', 'Plastic'] },
  { name: 'Running shoes', category: 'Apparel', portable: true, materials: ['Rubber', 'Polyester', 'Foam'] }, ANSWER,
  { name: 'Solar panel', category: 'Energy', portable: false, materials: ['Silicon', 'Silver', 'Aluminum'] },
  { name: 'T-shirt', category: 'Apparel', portable: true, materials: ['Cotton', 'Polyester'] },
]

const PALETTE = ['#20c997', '#339af0', '#ffb224', '#f06595', '#845ef7', '#ff6b6b', '#51cf66', '#22b8cf', '#fcc419', '#748ffc', '#e599f7', '#ffa94d']
// The 160 g reference model preserves JRC elemental masses and decomposes its
// 99.29 g aggregate category using the report's battery/glass/ceramic guidance.
const MATERIALS = [
  ['Glass & ceramics', 55, 0.80], ['Aluminum', 22.18, 3.254], ['Electrolyte & binders', 16.2796, 10],
  ['Copper', 15.12, 14.74], ['Graphite', 10, 0.32], ['Plastics', 9.53, 1.50], ['Magnesium', 5.54, 3.50],
  ['Cobalt', 5.38, 39.14], ['Nickel', 4.50, 16.05], ['Epoxy & resins', 4, 5], ['Silicon', 3, 2.50],
  ['Adhesives & coatings', 3, 8], ['Lithium compounds', 2, 17.51], ['Manganese', 1.50, 2], ['Tin', 1.21, 54.20],
  ['Steel / iron', 0.88, 0.80], ['Tungsten', 0.44, 153.46], ['Silver', 0.31, 1951.50],
  ['Neodymium', 0.05, 154.85], ['Gold', 0.03, 133800], ['Tantalum', 0.02, 535],
  ['Praseodymium', 0.01, 130], ['Indium', 0.01, 350], ['Palladium', 0.01, 52000], ['Gallium', 0.0004, 400],
].map(([name, mass, usdPerKg], index) => ({ name, mass, usdPerKg, color: PALETTE[index % PALETTE.length] }))
const MATERIAL_MASS = MATERIALS.map(item => [item.name, item.mass, item.color])
const MATERIAL_COST = MATERIALS.map(item => [item.name, item.mass / 1000 * item.usdPerKg, item.color]).sort((a, b) => b[1] - a[1])
const TOTAL_MASS = MATERIALS.reduce((sum, item) => sum + item.mass, 0)
const TOTAL_COST = MATERIAL_COST.reduce((sum, item) => sum + item[1], 0)

// Representative global shares. More countries are exposed while re-export
// hubs remain separate from assembly and final demand.
const ASSEMBLY = [['China', 45], ['Vietnam', 14], ['India', 11], ['South Korea', 7], ['Brazil', 3], ['Indonesia', 3], ['Mexico', 2], ['Turkey', 2], ['Egypt', 1.5], ['Pakistan', 1.5], ['Bangladesh', 1], ['Japan', 1], ['Taiwan', 1], ['Other', 7]]
const BUYERS = [['United States', 18], ['China', 15], ['India', 9], ['Germany', 5], ['Japan', 4.5], ['United Kingdom', 4], ['Brazil', 3.5], ['Indonesia', 3.5], ['France', 3], ['Mexico', 3], ['Thailand', 3], ['Italy', 2.5], ['Spain', 2.5], ['South Korea', 2.5], ['Canada', 2.5], ['Russia', 2], ['Turkey', 2], ['Saudi Arabia', 2], ['Australia', 1.5], ['United Arab Emirates', 1.5], ['Netherlands', 1.5], ['Nigeria', 1], ['South Africa', 1], ['Argentina', 1], ['Poland', 1], ['Other', 4]]
const SOURCES = [['China', 24], ['DR Congo', 18], ['Australia', 11], ['Chile', 8], ['Peru', 6], ['Indonesia', 6], ['Russia', 4], ['Brazil', 4], ['Rwanda', 3], ['Argentina', 3], ['Philippines', 2], ['South Africa', 2], ['Canada', 2], ['United States', 2], ['Other', 5]]
const LOGISTICS = [['Hong Kong', 20], ['United Arab Emirates', 17], ['Netherlands', 11], ['Singapore', 10], ['Czechia', 7], ['Slovakia', 5], ['Belgium', 5], ['Germany', 5], ['Panama', 4], ['Malaysia', 4], ['Poland', 3], ['Turkey', 3], ['Mexico', 2], ['Saudi Arabia', 2], ['Other', 2]]
// Directional end-of-life proxy: where small ICT equipment is discarded,
// collected, reused or informally handled—not a claim of traceable shipments.
const WASTE = [['China', 19.5], ['United States', 12], ['India', 9], ['Japan', 5], ['Brazil', 4], ['Indonesia', 4], ['Russia', 4], ['Germany', 3.5], ['United Kingdom', 3], ['France', 3], ['Mexico', 3], ['Turkey', 2.5], ['South Korea', 2.5], ['Italy', 2.5], ['Nigeria', 2], ['Pakistan', 2], ['Vietnam', 2], ['Thailand', 2], ['Spain', 2], ['Poland', 1.5], ['Canada', 1.5], ['Australia', 1.5], ['Ghana', 1.5], ['South Africa', 1.5], ['United Arab Emirates', 1], ['Other', 4]]
const HINTS = [
  'It is made to travel with one person, not stay in one room.',
  'Its battery stores energy in lithium compounds and may contain cobalt.',
  'Its most valuable parts are tiny chips, even though glass and metals dominate its weight.',
  'It connects to cellular networks and usually has a touchscreen.',
]
const STAGE_COLORS = { source: '#20c997', component: '#339af0', assembly: '#ff6b6b', logistics: '#845ef7', buyer: '#ffb224', waste: '#e599f7' }
const MAP_LAYERS = [
  ['source', 'Raw materials'], ['component', 'Components'], ['assembly', 'Production'],
  ['logistics', 'Logistics'], ['buyer', 'Buyers'], ['waste', 'Waste / disposal'],
]
const COUNTRY_ROLES = {
  '180': ['source'], '036': ['source', 'buyer', 'waste'], '152': ['source'], '604': ['source'],
  '643': ['source', 'buyer', 'waste'], '646': ['source'], '032': ['source', 'buyer'], '608': ['source'],
  '710': ['source', 'buyer', 'waste'], '124': ['source', 'buyer', 'waste'], '840': ['source', 'buyer', 'waste'],
  '158': ['component', 'assembly'], '392': ['component', 'assembly', 'buyer'],
  '410': ['component', 'assembly', 'buyer', 'waste'], '156': ['source', 'assembly', 'buyer', 'waste'],
  '704': ['assembly', 'waste'], '356': ['assembly', 'buyer', 'waste'], '360': ['source', 'assembly', 'buyer', 'waste'],
  '484': ['assembly', 'logistics', 'buyer', 'waste'], '792': ['assembly', 'logistics', 'buyer', 'waste'],
  '818': ['assembly'], '586': ['assembly', 'waste'], '050': ['assembly'],
  '784': ['logistics', 'buyer', 'waste'], '528': ['logistics', 'buyer'], '702': ['logistics'],
  '203': ['logistics'], '703': ['logistics'], '056': ['logistics'], '591': ['logistics'],
  '458': ['logistics'], '616': ['logistics', 'buyer', 'waste'], '682': ['logistics', 'buyer'],
  '276': ['logistics', 'buyer', 'waste'], '076': ['source', 'assembly', 'buyer', 'waste'],
  '826': ['buyer', 'waste'], '250': ['buyer', 'waste'], '380': ['buyer', 'waste'], '724': ['buyer', 'waste'],
  '764': ['buyer', 'waste'], '566': ['buyer', 'waste'], '288': ['waste'],
}

function compare(guess) {
  const overlap = guess.materials.filter(material => ANSWER.materials.includes(material)).length
  return { category: guess.category === ANSWER.category ? 'correct' : 'wrong', materials: overlap >= 4 ? 'correct' : overlap >= 2 ? 'close' : 'wrong', portable: guess.portable === ANSWER.portable ? 'correct' : 'wrong', overlap }
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
  const items = useMemo(() => rows.map(([name, value, color], index) => ({ name, value, color: color || PALETTE[index % PALETTE.length] })), [rows])
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
          {share >= 4 && <span><b>{rect.name}</b><small>{display(rect.value)}</small></span>}
        </div>
      })}
    </div>
    <div className={`sc-rect-list ${mode === 'mass' || mode === 'cost' ? 'mass' : ''}`}>
      {items.map(item => <div key={item.name}><i style={{ backgroundColor: item.color }} /><span>{item.name}</span><b>{display(item.value)}</b></div>)}
    </div>
  </div>
}

function SupplyMap() {
  const [visibleLayers, setVisibleLayers] = useState(MAP_LAYERS.map(([key]) => key))
  const toggleLayer = layer => setVisibleLayers(current => current.includes(layer) ? current.filter(item => item !== layer) : [...current, layer])
  const countries = WORLD_COUNTRIES.map(country => ({ ...country, roles: (COUNTRY_ROLES[country.id] || []).filter(role => visibleLayers.includes(role)) }))
  const labels = [
    ['DR Congo', 563, 258, 'source'], ['Australia', 872, 319, 'source'], ['Chile', 303, 342, 'source'], ['Peru', 292, 278, 'source'],
    ['Taiwan', 836, 185, 'component'], ['Japan', 883, 147, 'component'], ['China', 789, 153, 'assembly'],
    ['Vietnam', 800, 206, 'assembly'], ['India', 719, 189, 'assembly'], ['UAE', 650, 183, 'logistics'],
    ['Netherlands', 514, 106, 'logistics'], ['Singapore', 789, 247, 'logistics'], ['United States', 222, 144, 'buyer'],
    ['Brazil', 356, 278, 'buyer'],
  ]
  return <div>
    <div className="sc-map-controls" aria-label="Map categories">{MAP_LAYERS.map(([key, label]) => {
      const active = visibleLayers.includes(key)
      return <button key={key} type="button" className={active ? 'active' : ''} aria-pressed={active} onClick={() => toggleLayer(key)} style={{ '--layer-color': STAGE_COLORS[key] }}><i />{label}</button>
    })}<button type="button" className="sc-show-all" onClick={() => setVisibleLayers(MAP_LAYERS.map(([key]) => key))}>Show all</button><span><i />Striped = multiple selected roles</span></div>
    <div className="sc-map-wrap">
    <svg className="sc-map" viewBox="0 0 1000 500" role="img" aria-label="World map with selectable extraction, component production, assembly, logistics, buying and waste stages">
      <defs>{countries.filter(country => country.roles.length > 1).map(country => {
        const roles = country.roles
        return <pattern key={country.id} id={`stripe-${country.id}`} width={roles.length * 8} height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          {roles.map((role, index) => <rect key={role} x={index * 8} width="8" height="8" fill={STAGE_COLORS[role]} />)}
        </pattern>
      })}</defs>
      <g className="sc-countries">{countries.map(country => {
        const fill = country.roles.length > 1 ? `url(#stripe-${country.id})` : country.roles.length ? STAGE_COLORS[country.roles[0]] : '#1b252c'
        return <path key={country.id} d={country.d} className="sc-country" style={{ '--country-fill': fill }} />
      })}</g>
      <g className="sc-map-labels">{labels.filter(([, , , stage]) => visibleLayers.includes(stage)).map(([name, x, y, stage]) => <g key={name} transform={`translate(${x} ${y})`}><circle r="5" style={{ fill: STAGE_COLORS[stage] }} /><text y="-10">{name}</text></g>)}</g>
    </svg>
    <div className="sc-map-note">Borders: Natural Earth · select any combination above</div>
    </div>
  </div>
}

function EvidenceCard({ eyebrow, title, note, limitations, children, className = '' }) {
  return <section className={`sc-card ${className}`}><header><span>{eyebrow}</span><h2>{title}</h2></header>{children}{note && <p className="sc-caption">{note}</p>}{limitations && <details className="sc-limitations"><summary>Data limitations</summary><p>{limitations}</p></details>}</section>
}

export default function App() {
  const [selection, setSelection] = useState(''), [guesses, setGuesses] = useState([]), [done, setDone] = useState(false)
  const remaining = 5 - guesses.length
  const selectable = useMemo(() => OBJECTS.filter(object => !guesses.some(guess => guess.name === object.name)), [guesses])
  useEffect(() => {
    if (!document.head.querySelector('meta[name="darkreader-lock"]')) {
      const lock = document.createElement('meta'); lock.name = 'darkreader-lock'; document.head.appendChild(lock)
    }
  }, [])
  function submit(event) {
    event.preventDefault(); if (!selection || done) return
    const object = OBJECTS.find(item => item.name === selection), isCorrect = object.name === ANSWER.name
    setGuesses(current => [...current, { ...object, result: compare(object) }]); setSelection('')
    if (isCorrect || guesses.length === 4) setDone(true)
  }
  function reset() { setSelection(''); setGuesses([]); setDone(false) }
  const won = guesses.some(guess => guess.name === ANSWER.name)
  return <main className="sc-root"><style>{CSS}</style><div className="sc-shell">
    <header className="sc-top"><div className="sc-brand"><span className="sc-mark"><i/><i/><i/></span><span>Supply Chain Guess</span></div><div className="sc-counter" aria-label={`${remaining} guesses remaining`}><b>{remaining}</b><span>guesses left</span></div></header>
    <section className="sc-hero"><div><p className="sc-kicker">Object 001 · Everyday technology</p><h1>What object made<br/>this <em>global journey?</em></h1><p className="sc-dek">Read the materials, countries and routes. You have five guesses; every miss reveals another clue.</p></div><div className="sc-orbit" aria-hidden="true"><div className="sc-object-ghost"><span/><span/><span/></div><i className="dot a"/><i className="dot b"/><i className="dot c"/></div></section>
    <form className="sc-guess" onSubmit={submit}><label htmlFor="object-guess">Your guess</label><select id="object-guess" value={selection} onChange={event => setSelection(event.target.value)} disabled={done}><option value="">Choose an everyday object…</option>{selectable.map(object => <option key={object.name}>{object.name}</option>)}</select><button disabled={!selection || done}>Check guess</button></form>
    {(guesses.length > 0 || done) && <section className="sc-results" aria-live="polite">
      {guesses.map((guess, index) => <div className={`sc-result ${guess.name === ANSWER.name ? 'win' : ''}`} key={guess.name}><span className="sc-number">0{index + 1}</span><strong>{guess.name}</strong><span className={`sc-tag ${guess.result.category}`}>Category {guess.result.category === 'correct' ? 'match' : 'different'}</span><span className={`sc-tag ${guess.result.materials}`}>Materials {guess.result.overlap}/5</span><span className={`sc-tag ${guess.result.portable}`}>{guess.result.portable === 'correct' ? 'Portable match' : 'Not portable'}</span></div>)}
      {!done && <div className="sc-hint"><span>New hint</span><p>{HINTS[Math.min(guesses.length - 1, HINTS.length - 1)]}</p></div>}
      {done && <div className={`sc-finish ${won ? 'won' : ''}`}><div><span>{won ? 'Supply chain solved' : 'The object was'}</span><h2>Smartphone</h2><p>{won ? `You connected the clues in ${guesses.length} ${guesses.length === 1 ? 'guess' : 'guesses'}.` : 'Follow the route once more and try for a cleaner run.'}</p></div><button type="button" onClick={reset}>Play again</button></div>}
    </section>}
    <div className="sc-grid">
      <EvidenceCard eyebrow="01 · Mass composition" title={`Material mass · ${TOTAL_MASS.toFixed(0)} g total`} className="sc-wide" note="A reconciled reference model. Every quantity—including trace materials—is listed below." limitations="This is a synthetic 160 g reference model, not a teardown of one commercial model. Formulations vary by maker and year; broad material classes are decomposed using literature estimates, and trace quantities are rounded."><RectangleShareChart rows={MATERIAL_MASS} ariaLabel="Rectangular chart of material mass" mode="mass" tall /></EvidenceCard>
      <EvidenceCard eyebrow="02 · Commodity value" title={`Raw materials · about $${TOTAL_COST.toFixed(2)}`} className="sc-wide" note="Estimated value of the quantities above using 25 September–2 October 2026 reference prices. Excludes refining, yield losses, components, labor, logistics and margins." limitations="Reference commodity prices fluctuate and are not the prices a manufacturer necessarily pays. Several material classes lack a single traded benchmark, and this view excludes purification, process losses, components, labor, transport, taxes and margins."><RectangleShareChart rows={MATERIAL_COST} ariaLabel="Rectangular chart of estimated raw material value" mode="cost" tall /></EvidenceCard>
      <EvidenceCard eyebrow="03 · Extraction" title="Raw material sources" note="Representative concentration across selected minerals in the reference model." limitations="This blends national production concentration across several inputs. It is not mine-level procurement data: manufacturers may use different suppliers, recycled feedstock, traders and refiners, and origin can change between production runs."><RectangleShareChart rows={SOURCES} ariaLabel="Rectangular chart of raw material source countries" /></EvidenceCard>
      <EvidenceCard eyebrow="04 · Assembly" title="Producing countries" note="Illustrative share of global final assembly." limitations="Final-assembly shares vary by manufacturer, model and year. Public trade data can combine different devices and may record the exporting country rather than the factory that performed the final assembly."><RectangleShareChart rows={ASSEMBLY} ariaLabel="Rectangular chart of producing countries" /></EvidenceCard>
      <EvidenceCard eyebrow="05 · Distribution" title="Logistics & re-export hubs" note="Indicative role in routing the finished product through global trade." limitations="Re-export statistics identify trading hubs, not a single physical route. Goods may be counted more than once, pass through unreported ports, or be booked in one jurisdiction while moving through another."><RectangleShareChart rows={LOGISTICS} ariaLabel="Rectangular chart of logistics and transport countries" /></EvidenceCard>
      <EvidenceCard eyebrow="06 · Demand" title="Buying countries" note="Indicative share of final demand, grouped for play." limitations="This is a demand proxy rather than audited unit sales. Retail imports, domestic use, inventories, tourism and second-hand trade do not align perfectly, and market shares change throughout the year."><RectangleShareChart rows={BUYERS} ariaLabel="Rectangular chart of buying countries" /></EvidenceCard>
      <EvidenceCard eyebrow="07 · End of life" title="Where discarded objects end up" className="sc-wide" note="Directional proxy for where small ICT equipment is discarded, collected, reused or informally handled." limitations="These are not traceable disposal shares for one object. Only a minority of global e-waste is formally documented; informal reuse, household storage, mixed waste and uncontrolled cross-border shipments create large gaps, so the country split is intentionally approximate."><RectangleShareChart rows={WASTE} ariaLabel="Rectangular chart of likely end-of-life countries" /></EvidenceCard>
      <EvidenceCard eyebrow="08 · Global footprint" title="Where the stages happen" className="sc-wide" limitations="The map combines the panel estimates and illustrative stage roles. A colored country does not mean this particular object passed through it, and the view does not encode within-country intensity or exact routes. Filtering changes visibility only, not the underlying estimates."><SupplyMap /></EvidenceCard>
    </div>
    <footer className="sc-footer"><p><b>Prototype note.</b> The reference product has no single traceable route. Mass is a reconciled 160 g model; country shares—including end-of-life locations—are directional estimates for gameplay, informed by product-trade, critical-minerals and UN e-waste data.</p><span>One object · one global story</span></footer>
  </div></main>
}

const CSS = `
*{box-sizing:border-box}:root{color-scheme:dark;--sc-cyan:#20c997;--sc-blue:#339af0;--sc-gold:#ffb224;--sc-red:#ff6b6b;--sc-violet:#845ef7}
.sc-root{min-height:100%;color:var(--text);background:var(--bg);font-family:var(--font);overflow:auto}.sc-root button,.sc-root select{font:inherit}.sc-shell{width:min(1180px,calc(100% - 36px));margin:auto;padding:22px 0 48px}.sc-top{height:48px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border)}.sc-brand{display:flex;align-items:center;gap:10px;font-weight:760;letter-spacing:-.02em}.sc-mark{display:flex;align-items:flex-end;gap:2px;width:22px;height:22px}.sc-mark i{display:block;width:5px;background:var(--sc-cyan);border-radius:3px}.sc-mark i:nth-child(1){height:9px}.sc-mark i:nth-child(2){height:17px}.sc-mark i:nth-child(3){height:13px}.sc-counter{display:flex;align-items:baseline;gap:7px;color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.1em}.sc-counter b{font-size:20px;color:var(--text)}
.sc-hero{min-height:270px;display:grid;grid-template-columns:1.4fr .6fr;align-items:center;position:relative;overflow:hidden}.sc-kicker,.sc-card header span{font-size:11px;text-transform:uppercase;letter-spacing:.16em;color:var(--sc-cyan);font-weight:750}.sc-hero h1{font-size:clamp(40px,6vw,72px);line-height:.96;letter-spacing:-.055em;margin:12px 0 18px;max-width:760px}.sc-hero h1 em{font-style:normal;color:var(--muted)}.sc-dek{max-width:610px;color:var(--muted);font-size:15px;line-height:1.6;margin:0}.sc-orbit{width:210px;height:210px;border:1px solid color-mix(in srgb,var(--sc-cyan) 30%,transparent);border-radius:50%;position:relative;justify-self:end}.sc-orbit:before,.sc-orbit:after{content:"";position:absolute;border-radius:50%;border:1px solid color-mix(in srgb,var(--sc-blue) 20%,transparent)}.sc-orbit:before{inset:24px}.sc-orbit:after{inset:52px}.sc-object-ghost{position:absolute;inset:63px;border:2px solid color-mix(in srgb,var(--text) 32%,transparent);border-radius:15px;transform:rotate(45deg);display:grid;place-items:center}.sc-object-ghost:before,.sc-object-ghost:after{content:"";position:absolute;background:color-mix(in srgb,var(--text) 24%,transparent)}.sc-object-ghost:before{width:70%;height:2px}.sc-object-ghost:after{width:2px;height:70%}.sc-object-ghost span{position:absolute;width:5px;height:5px;border-radius:50%;background:var(--sc-cyan)}.sc-object-ghost span:nth-child(1){top:12px}.sc-object-ghost span:nth-child(2){right:12px}.sc-object-ghost span:nth-child(3){bottom:12px}.sc-orbit .dot{position:absolute;width:8px;height:8px;border-radius:50%;background:var(--sc-gold);box-shadow:0 0 14px var(--sc-gold)}.dot.a{top:20px;left:96px}.dot.b{right:18px;bottom:56px;background:var(--sc-cyan)}.dot.c{left:18px;bottom:48px;background:var(--sc-blue)}
.sc-guess{display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:14px;background:var(--surface);border:1px solid var(--border);border-radius:14px;margin:3px 0 18px;box-shadow:0 10px 30px color-mix(in srgb,#000 12%,transparent)}.sc-guess label{font-size:12px;font-weight:750;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);padding:0 8px}.sc-guess select{width:100%;height:48px;background:var(--surface-2);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:0 14px;outline:none}.sc-guess select:focus{border-color:var(--sc-cyan);box-shadow:0 0 0 3px color-mix(in srgb,var(--sc-cyan) 18%,transparent)}.sc-guess button,.sc-finish button{height:48px;border:0;border-radius:9px;padding:0 22px;background:var(--sc-cyan);color:#07251c;font-weight:800;cursor:pointer}.sc-guess button:disabled{opacity:.35;cursor:not-allowed}
.sc-results{margin-bottom:18px}.sc-result{display:grid;grid-template-columns:42px minmax(130px,1fr) repeat(3,auto);gap:9px;align-items:center;padding:10px 12px;background:var(--surface);border:1px solid var(--border);border-radius:10px;margin-top:7px}.sc-result.win{border-color:var(--sc-cyan)}.sc-number{color:var(--muted);font-size:11px}.sc-tag{font-size:11px;padding:7px 9px;border-radius:6px;background:var(--surface-2);color:var(--muted);white-space:nowrap}.sc-tag.correct{color:#07251c;background:var(--sc-cyan)}.sc-tag.close{color:#382700;background:var(--sc-gold)}.sc-hint{display:flex;gap:14px;align-items:center;padding:13px 16px;margin-top:7px;background:color-mix(in srgb,var(--sc-blue) 9%,var(--surface));border:1px solid color-mix(in srgb,var(--sc-blue) 35%,var(--border));border-radius:10px}.sc-hint span{font-size:10px;white-space:nowrap;text-transform:uppercase;letter-spacing:.12em;color:var(--sc-blue);font-weight:800}.sc-hint p{margin:0;font-size:13px}.sc-finish{display:flex;justify-content:space-between;align-items:center;padding:18px 20px;margin-top:8px;background:color-mix(in srgb,var(--sc-red) 10%,var(--surface));border:1px solid color-mix(in srgb,var(--sc-red) 35%,var(--border));border-radius:12px}.sc-finish.won{background:color-mix(in srgb,var(--sc-cyan) 9%,var(--surface));border-color:color-mix(in srgb,var(--sc-cyan) 40%,var(--border))}.sc-finish span{font-size:10px;text-transform:uppercase;letter-spacing:.14em;color:var(--muted)}.sc-finish h2{margin:2px 0;font-size:28px}.sc-finish p{margin:0;color:var(--muted);font-size:13px}
.sc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.sc-card{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:19px;min-width:0}.sc-card header{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-bottom:16px}.sc-card header h2{font-size:19px;letter-spacing:-.025em;margin:0}.sc-card header span{font-size:9px}.sc-wide{grid-column:1/-1}.sc-caption{font-size:10px;color:var(--muted);margin:13px 0 0}.sc-limitations{margin-top:12px;padding-top:10px;border-top:1px solid color-mix(in srgb,var(--border) 75%,transparent);font-size:10px;color:var(--muted)}.sc-limitations summary{width:max-content;cursor:pointer;color:var(--text);font-size:9px;font-weight:760;letter-spacing:.08em;text-transform:uppercase}.sc-limitations summary:focus-visible{outline:2px solid var(--sc-cyan);outline-offset:3px;border-radius:2px}.sc-limitations p{max-width:900px;margin:9px 0 0;line-height:1.55}.sc-rect-plot{height:210px;position:relative;overflow:hidden;border-radius:9px;background:#10161b;isolation:isolate;forced-color-adjust:none}.sc-rect-chart.tall .sc-rect-plot{height:280px}.sc-rect{position:absolute;border:2px solid #10161b!important;overflow:hidden;forced-color-adjust:none!important;filter:none!important}.sc-rect span{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:10px;color:#07120f!important;text-shadow:0 1px 0 rgba(255,255,255,.22)}.sc-rect b{font-size:12px;line-height:1.15}.sc-rect small{font-size:10px;font-weight:750;margin-top:3px}.sc-rect-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px 15px;margin-top:12px}.sc-rect-list.mass{grid-template-columns:repeat(4,minmax(0,1fr))}.sc-rect-list>div{display:grid;grid-template-columns:8px 1fr auto;gap:7px;align-items:center;min-width:0;padding:5px 0;border-bottom:1px solid color-mix(in srgb,var(--border) 65%,transparent);font-size:10px}.sc-rect-list i{width:7px;height:7px;border-radius:2px;forced-color-adjust:none!important}.sc-rect-list span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--muted)}.sc-rect-list b{font-size:9px;color:var(--text)}
.sc-map-controls{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-bottom:10px}.sc-map-controls button{display:inline-flex;align-items:center;gap:6px;min-height:30px;padding:5px 9px;border:1px solid var(--border);border-radius:7px;background:var(--surface-2);color:var(--muted);font-size:9px;font-weight:700;cursor:pointer}.sc-map-controls button i{width:8px;height:8px;border-radius:2px;background:var(--layer-color);opacity:.35;forced-color-adjust:none!important}.sc-map-controls button.active{border-color:color-mix(in srgb,var(--layer-color) 65%,var(--border));color:var(--text);background:color-mix(in srgb,var(--layer-color) 12%,var(--surface-2))}.sc-map-controls button.active i{opacity:1}.sc-map-controls button:focus-visible{outline:2px solid var(--sc-cyan);outline-offset:2px}.sc-map-controls .sc-show-all{margin-left:3px;color:var(--text)}.sc-map-controls>span{display:inline-flex;align-items:center;gap:6px;margin-left:auto;color:var(--muted);font-size:9px}.sc-map-controls>span i{width:10px;height:10px;border-radius:2px;background:repeating-linear-gradient(45deg,var(--sc-cyan) 0 3px,var(--sc-red) 3px 6px,#e599f7 6px 9px);forced-color-adjust:none!important}.sc-map-wrap{position:relative;background:#0d1419!important;border:1px solid #33404a!important;border-radius:10px;overflow:hidden;isolation:isolate;forced-color-adjust:none!important}.sc-map{display:block;width:100%;height:auto;max-height:520px;background:#0d1419!important;filter:none!important;forced-color-adjust:none!important}.sc-country{fill:var(--country-fill,#1b252c)!important;stroke:#8b9aa5!important;stroke-width:.72!important;vector-effect:non-scaling-stroke}.sc-map-labels circle{stroke:#0d1419!important;stroke-width:2}.sc-map-labels text{fill:#f4f7f8!important;stroke:#0d1419!important;stroke-width:4px;paint-order:stroke;stroke-linejoin:round;font-size:11px;font-weight:760;text-anchor:middle}.sc-map-note{position:absolute;right:12px;bottom:10px;padding:5px 8px;background:#10191f!important;border:1px solid #56636d!important;border-radius:6px;font-size:9px;color:#d4dde2!important}
.sc-footer{display:flex;justify-content:space-between;gap:30px;border-top:1px solid var(--border);margin-top:18px;padding-top:16px;color:var(--muted);font-size:10px;line-height:1.5}.sc-footer p{max-width:800px;margin:0}.sc-footer span{white-space:nowrap}@media(max-width:720px){.sc-shell{width:min(100% - 22px,1180px);padding-top:10px}.sc-hero{grid-template-columns:1fr;min-height:300px}.sc-hero h1{font-size:44px}.sc-orbit{position:absolute;right:-85px;opacity:.5}.sc-dek{max-width:90%}.sc-guess{grid-template-columns:1fr}.sc-guess label{padding:0}.sc-guess button{width:100%}.sc-grid{grid-template-columns:1fr}.sc-wide{grid-column:auto}.sc-result{grid-template-columns:34px 1fr}.sc-result .sc-tag{grid-column:2}.sc-card{padding:15px}.sc-card header{display:block}.sc-card header h2{margin-top:5px}.sc-rect-list.mass{grid-template-columns:repeat(2,minmax(0,1fr))}.sc-rect-plot,.sc-rect-chart.tall .sc-rect-plot{height:220px}.sc-map{min-width:720px}.sc-map-wrap{overflow-x:auto}.sc-footer{display:block}.sc-footer span{display:block;margin-top:10px}.sc-finish{align-items:flex-start;gap:14px}}@media(prefers-reduced-motion:no-preference){.sc-orbit{animation:scFloat 7s ease-in-out infinite}}@keyframes scFloat{50%{transform:translateY(-8px) rotate(2deg)}}
`
