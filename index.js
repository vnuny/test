const exp = require('constants');
const express = require('express');
const https = require('https');

const app = express();
let PORT = process.env.PORT || 3000;

app.get('/', async(req, res)=>{
    await https.get('https://www.juniordevelopercentral.com/', (response)=>{
        let data = ``;
        response.on('data', (dataa)=>{
            data += dataa; 
        })

        response.on('end', ()=>{
            res.send(data);
        })
    })
})

app.listen(PORT, ()=>{
    console.log('work')
})
