const express = require('express');
const bodyParser = require('body-parser');





const app = express();
const port = process.env.PORT || 3080;



app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
