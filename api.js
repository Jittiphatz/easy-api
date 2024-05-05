const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors')

app.use(cors());
app.use(express.json());

const products = [
  {
    name: 'iPhone 13',
    image: 'https://media.studio7thailand.com/7120/iPhone_13_PDP_Position-1A_Color_Pink__1-square_medium.jpg',
    company: 'Apple'
  },
  {
    name: 'iPhone 12',
    image: 'https://media-cdn.bnn.in.th/110165/Apple-iPhone-12-Purple-1-square_medium.jpg',
    company: 'Apple'
  },
  {
    name: 'iPhone 11',
    image: 'https://p-th.ipricegroup.com/uploaded_026eee43b7ef24745c02e5166b5cfe6797f685d9.jpg',
    company: 'Apple'
  }
]

app.get('/products', (req, res) => {
  res.status(200).json(products);
})

app.listen(PORT, () => console.log('Server is running...'))