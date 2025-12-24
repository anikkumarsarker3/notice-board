const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // await client.connect();
        const db = client.db('NebsIT');
        const noticeCollection = db.collection('notices');

        app.post('/notices', async (req, res) => {
            const notice = req.body;
            notice.createdAt = new Date();
            const result = await noticeCollection.insertOne(notice);
            res.send(result);
        })
        app.get('/notices', async (req, res) => {
            const result = await noticeCollection.find().toArray();
            res.send(result);
        })


        // ployment. You successfully connected to MongoDB!");
    } finally {

        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
