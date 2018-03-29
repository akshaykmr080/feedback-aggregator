const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send({hi: 'Got you'})
})

app.listen(PORT, () => {
    console.log('server listening on posrt 5000')
})