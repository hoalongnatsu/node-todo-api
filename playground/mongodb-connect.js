const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
   if (err) return console.log('Unable to connect to Mongodb');

   console.log('Connect to Mongodb serve');

   const db = client.db('TodoApp');

   // db.collection('todos').insertOne({
   //    text: 'Some text todo',
   //    completed: false
   // }, (err, result) => {
   //    if (err) return console.log('Unable to insert todo', err);

   //    console.log(JSON.stringify(result.ops));
   // });

   // db.collection('users').insertOne({
   //    name: 'John',
   //    age: 25,
   //    address: 'VN'
   // }, (err, result) => {
   //    if (err) return console.log('Unable to insert user', err);

   //    console.log(JSON.stringify(result.ops));
   // })

   client.close();
});