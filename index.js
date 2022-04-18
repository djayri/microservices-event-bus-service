const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const app = express();
app.use(bodyParser.json());
app.use(cors());

const services = {
  posts:'http://localhost:4000/events',
  comments:'http://localhost:4001/events',
  query:'http://localhost:4002/events',
}

app.post('/events', (req, res) => {
  const event = req.body;
  Object.values(services).forEach(endpoint => {
    axios.post(endpoint, event)
  })
})

const port = 4005
app.listen(port, () => {
  console.log(`Listening on ${port}`)
});