const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

/* Router Handlers */


app.get('/', (req,res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
