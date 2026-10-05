export function normalizeGuess(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/^(?:a|an|the)\s+/, '')
    .replace(/\s+/g, ' ')
}

function editDistance(left, right) {
  const previous = Array.from({ length: right.length + 1 }, (_, index) => index)
  for (let row = 1; row <= left.length; row += 1) {
    const current = [row]
    for (let column = 1; column <= right.length; column += 1) {
      current[column] = Math.min(
        current[column - 1] + 1,
        previous[column] + 1,
        previous[column - 1] + (left[row - 1] === right[column - 1] ? 0 : 1),
      )
    }
    previous.splice(0, previous.length, ...current)
  }
  return previous[right.length]
}

export function resolveGuess(value, objects) {
  const normalized = normalizeGuess(value)
  if (!normalized) return null
  const terms = objects.flatMap(object => [object.name, ...(object.aliases || [])]
    .map(term => ({ object, term: normalizeGuess(term) })))
  const exact = terms.find(candidate => candidate.term === normalized)
  if (exact) return exact.object

  const threshold = normalized.length >= 9 ? 2 : normalized.length >= 5 ? 1 : 0
  if (!threshold) return null
  const ranked = terms
    .map(candidate => ({ ...candidate, distance: editDistance(normalized, candidate.term) }))
    .filter(candidate => candidate.distance <= threshold)
    .sort((a, b) => a.distance - b.distance || a.term.length - b.term.length)
  if (!ranked.length) return null
  const bestDistance = ranked[0].distance
  const bestObjects = [...new Set(ranked.filter(candidate => candidate.distance === bestDistance).map(candidate => candidate.object))]
  return bestObjects.length === 1 ? bestObjects[0] : null
}
