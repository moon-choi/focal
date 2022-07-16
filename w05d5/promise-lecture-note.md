# gary

@PROMISE - GARY

.then ( res => {

return 5 })

.then ( res => {

it gets 5 from the previous then})

.then returns a promise

.catch ( err => { console.log(err.message) })

.catch returns a promise, so you can .then on it

.finally( () => { pool.end(); } );

—

const axios = require(‘axios’)
