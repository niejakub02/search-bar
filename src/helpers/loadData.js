const d = require('./../data/dummy.json')

export const data = d.map(obj => ({...obj, fullName: `${obj.name} ${obj.surname}`, occupation: obj.occupation.join(', ')}));