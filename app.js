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
]

const RAIL_TYPES = {
  EN: 'east-north',
  ES: 'east-south',
  WS: 'west-south',
  WN: 'west-north',
  NS: 'north-south',
  WE: 'west-east',
  NSE: 'north-south-east',
  NSW: 'north-south-west',
  EWS: 'east-west-south',
  EWN: 'east-west-north',
  CF: 'carrefour',
}

const rails = [
  {
    location: 46,
    type: RAIL_TYPES.WS,
  },
  {
    location: 66,
    type: RAIL_TYPES.NS,
  },
  {
    location: 86,
    type: RAIL_TYPES.NSE,
  },
  {
    location: 87,
    type: RAIL_TYPES.WS,
  },
  {
    location: 107,
    type: RAIL_TYPES.NS,
  },
  {
    location: 106,
    type: RAIL_TYPES.NS,
  },
  {
    location: 127,
    type: RAIL_TYPES.EN,
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
