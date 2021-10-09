import rails from './routes.js'

const grid = document.querySelector('.grid')

const cities = [
  {
    name: 'Paris',
    location: 45,
  },
  {
    name: 'Rome',
    location: 175,
  },

  {
    name: 'Bord eaux',
    location: 245,
  },
]

// const townIndices = [4, 78, 98, 123, 153, 179, 351, 601, 703]
const cityIndices = cities.map((t) => t.location)
const railsIndices = rails.map((r) => r.location)

for (let i = 0; i < 400; i++) {
  const cell = document.createElement('div')
  if (cityIndices.includes(i)) {
    cell.textContent = cities.find((t) => t.location === i).name
    cell.classList.add('city')
  } else if (railsIndices.includes(i)) {
    const className = rails.find((r) => r.location === i).type
    cell.classList.add(className)
  } else {
    cell.textContent = i
  }

  grid.appendChild(cell)
}
