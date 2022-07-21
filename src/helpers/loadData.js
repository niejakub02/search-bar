import d from '../data/dummy.json' assert {type: 'json'};

export const data = d.map(obj => ({...obj, fullName: `${obj.name} ${obj.surname}`, occupation: obj.occupation.join(', ')}));