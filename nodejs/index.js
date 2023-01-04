import express from 'express'

const app = express()
const port = 8083

app.get('/hello', (req, res) => {
    res.set('Content-Type', 'text/plain')
    res.send('Hello from NodeJS!')
})

app.listen(port, "192.168.67.13", () => {
  console.log(`Example app listening on port ${port}`)
})

