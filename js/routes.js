export const RAIL_TYPES = {
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
  // For end-rails only
  E: 'east',
  W: 'west',
  N: 'north',
  S: 'south',
}

export const getAllowedDirections = (type) => {
  switch (type) {
    case RAIL_TYPES.CF:
      return ['east', 'north', 'south', 'west']
    default:
      return type.split('-')
  }
}

const benelux = [
  {
    location: 4,
    type: RAIL_TYPES.WE,
  },
  {
    location: 6,
    type: RAIL_TYPES.WE,
  },
  {
    location: 5,
    type: RAIL_TYPES.EWS,
  },
  {
    location: 25,
    type: RAIL_TYPES.NS,
  },
]

const south = [
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
    location: 106,
    type: RAIL_TYPES.NS,
  },
  {
    location: 126,
    type: RAIL_TYPES.NS,
  },
  {
    location: 146,
    type: RAIL_TYPES.NS,
  },
  {
    location: 166,
    type: RAIL_TYPES.WN,
  },
  {
    location: 165,
    type: RAIL_TYPES.ES,
  },
  {
    location: 185,
    type: RAIL_TYPES.NS,
  },
  {
    location: 205,
    type: RAIL_TYPES.NS,
  },
  {
    location: 225,
    type: RAIL_TYPES.NS,
  },
]
const transAlps = [
  {
    location: 107,
    type: RAIL_TYPES.NS,
  },
  {
    location: 127,
    type: RAIL_TYPES.EN,
  },
  {
    location: 128,
    type: RAIL_TYPES.WE,
  },
  {
    location: 129,
    type: RAIL_TYPES.WE,
  },
  {
    location: 130,
    type: RAIL_TYPES.WE,
  },
  {
    location: 131,
    type: RAIL_TYPES.WE,
  },
  {
    location: 132,
    type: RAIL_TYPES.WE,
  },
  {
    location: 133,
    type: RAIL_TYPES.WE,
  },
  {
    location: 134,
    type: RAIL_TYPES.WE,
  },
  {
    location: 135,
    type: RAIL_TYPES.WS,
  },
  {
    location: 155,
    type: RAIL_TYPES.NS,
  },
]

const rails = benelux.concat(south).concat(transAlps)

export default rails
