const express = require('express');
const app = express();

app.use(() =>{
    console.log('Halo Server');
    console.log('Halo Server dua');
    console.log('Halo Server tiga');
})

app.listen(4000);