const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const app = express();
app.use(bodyParser.json());
app.use(cors());

const services = {
  posts:'http://posts-srv:4000/events',
  comments:'http://comments-srv:4001/events',
  query:'http://query-srv:4002/events',
  moderation: 'http://moderation-srv:4003/events'
}

app.post('/events', (req, res) => {
  const event = req.body;
  Object.values(services).forEach(endpoint => {
    axios.post(endpoint, event)
  });
  res.send({});
})

const port = 4005
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});