const express = require('express');
const app = express();
const bodyParser = require('body-parser');
global.mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/the_magazine_store');
app.use(bodyParser.json());

// MODELS
const Product = require('./models/product.js');


// ROUTES
app.get('/products', async(req, res)=>{
  //res.send('We are products');
  let products = await Product.find(); // {name:"The Times"}
  res.json(products);
});

app.post('/products', async(req, res)=>{
  //res.send('We would create a product');
  let product = await new Product(req.body);
  try{
    product.save();
  }catch(e){
    console.error(e);
  }
  res.json(product);
});

app.put('/products/:id', async(req, res)=>{
  //res.send('We would update a product');

  let product = await Product.findOne({_id: req.params.id});  // Get the product from the db
  let result = await product.update(req.body);                // Perform update 
  if(result.ok){
    result = req.body;
  }
  res.json(result);
});

app.delete('/products', (req, res)=>{
  res.send('We would delete a product');
});

app.listen('3000', ()=>{
  console.log('The magazine store server is running on port 3000');
});
