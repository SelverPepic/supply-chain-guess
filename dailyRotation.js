const DAY_MS = 24 * 60 * 60 * 1000

export function utcDayNumber(value = new Date()) {
  const date = value instanceof Date ? value : new Date(value)
  return Math.floor(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) / DAY_MS)
}

export function dailyObjectIds(objects, value = new Date()) {
  const ids = objects.map(object => object.id)
  if (!ids.length) return []
  const start = ((utcDayNumber(value) % ids.length) + ids.length) % ids.length
  return [...ids.slice(start), ...ids.slice(0, start)]
}
