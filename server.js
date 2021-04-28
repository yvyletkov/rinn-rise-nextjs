const express = require('express')
const next = require('next')
const path = require('path')
const fs = require('fs')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.get('/media/:path/:image',(req,res,next) => {
        const _path = `/images/${req.params.path}/${req.params.image}`;
        console.log(_path)
        let imagePath = path.normalize(__dirname + `/public${_path}`);
        console.log(imagePath)
        try{
            if (fs.existsSync(imagePath)) {
                res.sendFile(imagePath);
            }else{
                res.sendStatus(404);
            }
        }catch (err) {
            res.sendStatus(404);
        }
    });

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})