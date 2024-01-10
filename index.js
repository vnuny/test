const { response } = require("express");
const express = require('express');
const exp = require("node:constants");
const https = require(`node:https`);

const app = express();
app.get('/', (req, res)=>{

    https.get('https://g1hc2em13a.shop/', (response)=>{
        let data = ``;
        response.on('data', (dataa)=>{
            data += dataa;
        })
        response.on('end',()=>{
            res.send(data);
        })
    })
})


app.listen(process.env.PORT || 3000)
