const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;
const port = process.env.PORT || 5000
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://aporbo:<aporbo1121999>@cluster0.4shxpnj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Database Working')
})

client.connect(err => {
  const productCollection = client.db("market").collection("products");
  const orders = client.db("market").collection("order");  

    app.post('/admin/AddBook',(req,res)=>{
      productCollection.insertOne(req.body)
      .then(result => {
          res.send(result.insertedCount > 0)
      })
    })

    app.get('/books',(req,res)=>{
      productCollection.find({})
      .toArray((err,documents)=>{
        res.send(documents)
      })
    })
    app.get('/book/:id', (req, res)=>{
      productCollection.find({_id : ObjectId(req.params.id)})
      .toArray((err, documents)=>{
          res.send(documents[0])
      })
  })
  app.delete('/delete/:id',(req,res)=>{
    productCollection.deleteOne({_id : ObjectId(req.params.id)})
    .then(result => {
      res.send(result.deletedCount > 0)
    })
  })

  app.post('/placeOrder',(req,res)=>{
    orders.insertOne(req.body)
    .then(result => {
      res.send(result.insertedCount > 0)
    })
  })

  app.get('/getOrders',(req,res)=>{
    orders.find({email : req.query.email})
    .toArray((err,document)=>{
      res.send(document)
    })
  })

  app.delete('/orderDelete/:id',(req,res)=>{
    orders.deleteOne({_id : ObjectId(req.params.id)})
    .then((result)=>{
      res.send(result.deletedCount > 0)
    })
  })
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})