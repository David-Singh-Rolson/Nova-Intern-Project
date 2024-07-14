const { MongoClient } = require('mongodb');
const uri = 'your_mongodb_connection_string';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function saveContactForm(formData) {
    try {
        await client.connect();
        const database = client.db('mydatabase');
        const collection = database.collection('contacts');
        await collection.insertOne(formData);
    } finally {
        await client.close();
    }
}

module.exports = { saveContactForm };
