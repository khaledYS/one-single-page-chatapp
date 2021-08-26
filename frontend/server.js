const express = require('express')

const app = express()
const port = process.env.FRONTEND_PORT || 3001 

// to find the assets file like : style.css , main-page/assets, etc
app.use("/assets" ,express.static(__dirname + '/public/assets'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html', 'utf8')
})


app.listen(port, ()=>console.log(`frontend is up on the port ${port}`))