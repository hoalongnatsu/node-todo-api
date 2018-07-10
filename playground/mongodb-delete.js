const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
   if (err) return console.log('Unable to connect to Mongodb');

   console.log('Connect to Mongodb serve');

   const db = client.db('TodoApp');

   //Delete many
   // db.collection('todos').deleteMany({text: 'Eat lunch'}).then(res => console.log(res));

   //Delete one
   // db.collection('todos').deleteOne({text: 'Eat lunch'}).then(res => console.log(res));

   //FindOneAndDelete
   db.collection('todos').findOneAndDelete({ completed: false }).then(res => console.log(res));

   client.close();
});