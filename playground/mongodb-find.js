const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
   if (err) return console.log('Unable to connect to Mongodb');

   console.log('Connect to Mongodb serve');

   const db = client.db('TodoApp');

   db.collection('todos').find({
      _id: new ObjectID('5b3f1a5bd6d2698b9613cdce')
   }).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
   })

   client.close();
});