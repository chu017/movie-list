const express = require('express')
const app = express()
const port = 5000
const axios = require('axios')

require('dotenv').config()
const API_KEY = process.env.REACT_APP_API_KEY_TMDB

app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/movies', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
    .then((response) => {
      console.log('data from api:', response.data);
    })
    .catch((error) => {
      console.log(error);
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})