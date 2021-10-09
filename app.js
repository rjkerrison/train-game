import rails, { RAIL_TYPES, getAllowedDirections } from './routes.js'

const grid = document.querySelector('.grid')

const cities = [
  {
    name: 'Brussels',
    location: 3,
    junction: RAIL_TYPES.WE,
  },
  {
    name: 'Lille',
    location: 5,
    junction: RAIL_TYPES.EWS,
  },
  {
    name: 'Luxembourg',
    location: 7,
    junction: RAIL_TYPES.WE,
  },
  {
    name: 'Paris',
    location: 45,
    junction: RAIL_TYPES.EN,
  },
  {
    name: 'Rome',
    location: 175,
    junction: RAIL_TYPES.NS,
  },
  {
    name: 'Milan',
    location: 133,
    junction: RAIL_TYPES.WE,
  },
  {
    name: 'Bordeaux',
    location: 245,
    junction: RAIL_TYPES.NS,
  },
]

// const townIndices = [4, 78, 98, 123, 153, 179, 351, 601, 703]
const cityIndices = cities.map((t) => t.location)
const railsIndices = rails.map((r) => r.location)

const addCityToCell = (cell, i) => {
  const city = cities.find((t) => t.location === i)
  cell.textContent = city.name.slice(0, 2)
  cell.classList.add('city')
  cell.setAttribute('data-city-name', city.name)
  cell.setAttribute('data-rail-type', city.junction)
}

const addRailsToCell = (cell, i) => {
  const className = rails.find((r) => r.location === i).type
  cell.setAttribute('data-rail-type', className)
  cell.classList.add(className)
}

let trainIndex = 46

const cells = []

for (let i = 0; i < 400; i++) {
  const cell = document.createElement('div')
  if (cityIndices.includes(i)) {
    addCityToCell(cell, i)
  } else if (railsIndices.includes(i)) {
    addRailsToCell(cell, i)
  } else {
    cell.textContent = i
  }

  if (i === trainIndex) {
    cell.classList.add('train')
    cell.textContent = i
  }

  grid.appendChild(cell)
  cells.push(cell)
}

grid.addEventListener('click', (event) => {
  if (event.target.classList.contains('city')) {
    alert(event.target.getAttribute('data-city-name'))
  }
})

const directions = {
  north: -20,
  south: 20,
  west: -1,
  east: 1,
}

const move = (direction) => {
  const allowedDirections = getAllowedDirections(
    cells[trainIndex].getAttribute('data-rail-type')
  )
  if (!allowedDirections.includes(direction)) {
    return
  }
  cells[trainIndex].classList.remove('train')
  trainIndex += directions[direction]
  cells[trainIndex].classList.add('train')
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      move('north')
      break
    case 'ArrowDown':
      move('south')
      break
    case 'ArrowRight':
      move('east')
      break
    case 'ArrowLeft':
      move('west')
      break
  }
})
