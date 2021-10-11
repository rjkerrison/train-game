const path = (th) => {
  return `M ${d(25, th)}
    L ${d(75, th)}
    L ${d(75, th + 0.05)}
    L ${d(25, th + 0.05)}`
}

const d = (r, th) => [
  Math.sin(Math.PI * 0.5 * th) * r,
  Math.cos(Math.PI * 0.5 * th) * r,
]

const p = (r, th) => [
  100 - Math.sin(Math.PI * 0.5 * th) * r,
  Math.cos(Math.PI * 0.5 * th) * r,
]

const reversePath = (th) => {
  return `M ${p(25, th)}
    L ${p(75, th)}
    L ${p(75, th + 0.05)}
    L ${p(25, th + 0.05)}`
}

// example: generating the paths for a quarter circle at the right of the box
;[0.1, 0.25, 0.4, 0.55, 0.7, 0.85]
  .map(reversePath)
  .forEach((i) => console.log(i))
