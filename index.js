const express = require('express')
const app = express()

const port = 3000

app.use(express.json())

let users = []

app.get('/', (req, res) => {
  res.json(users)
})

app.post('/', (req, res) => {
  const body = req.body

  users.push(body)

  return res.json(body)
})

app.put('/:id', (req, res) => {
  const body = req.body

  const id = req.params.id

  users[id] = body

  return res.json(body)
})

app.delete('/:id', (req, res) => {
  const id = req.params.id

  users.splice(id, 1)

  return res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
