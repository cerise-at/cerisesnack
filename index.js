const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send('Snack at it again')
});

app.listen(port, () => console.log(`Express listening on ${port}`));