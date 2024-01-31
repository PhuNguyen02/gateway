const cryptos = require('crypto')

const key1 = cryptos.randomBytes(32).toString('hex')
const key2 = cryptos.randomBytes(32).toString('hex')

console.table({key1,key2})

