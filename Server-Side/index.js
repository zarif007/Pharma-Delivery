const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;

const { MongoClient } = require('mongodb');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5cvzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



async function run(){

    try{
        await client.connect();
        const database = client.db('pharma_delivery');
        const medicinesCollection = database.collection('medicines');
        const ordersCollection = database.collection('orders');

        //GET medicines data
        app.get('/medicines', async(req, res) => {
            const cursor = medicinesCollection.find({});
            const medicines = await cursor.toArray();
            res.send(medicines);
        });

        // POST a medicine details
        app.post('/medicines', async(req, res) => {
            const medicine = req.body;
            const result = await medicinesCollection.insertOne(medicine);
        });

        // GET for single user 
        app.get('/medicines/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const medicine = await medicinesCollection.findOne(query);
            res.json(medicine);
        });

        // POST a order
        app.post('/orders', async(req, res) => {
            const order = req.body;
            const result = await ordersCollection.insertOne(order);
            console.log(result);
        });

        // GET a single user's orders 
        app.get('/orders/:id', async(req, res) => {
            const id = req.params.id;
            const query = {client: id};
            const orders = await ordersCollection.find(query).toArray();
            res.json(orders);
        });

        // DELETE a order 
        app.delete('/orders/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await ordersCollection.deleteOne(query);
            res.json(result);
        });

        // UPDATE a order 
        app.patch('/orders/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await ordersCollection.updateOne(query, { $set: {pStatus: "confirmed" }});
            res.json(result);
        });

        // GET all orders 
        app.get('/allorders', async(req, res) => {
            const cursor = ordersCollection.find({});
            const orders = await cursor.toArray();
            res.send(orders);
        });

    } finally {
        //await client.close();
    }
}

run().catch(console.dir);


app.get('/', async (req, res) =>{
    res.send('ok');
})

app.listen(port, () => {
    console.log('ooooo');
})