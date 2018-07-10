const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
   if (err) return console.log('Unable to connect to Mongodb');

   console.log('Connect to Mongodb serve');

   const db = client.db('TodoApp');

   // db.collection('todos').findOneAndUpdate({
   //    _id: new ObjectID('5b3f1a5bd6d2698b9613cdce')
   // }, {
   //       $set: {
   //          completed: true
   //       }
   // });

   db.collection('users').findOneAndUpdate({
      _id: new ObjectID('5b3f1660b55b6720f459cf2d')
   }, {
         $set: {
            name: 'Max'
         },
         $inc: {
            age: 1
         }
   }, {
         returnOriginal: true
   }).then(res => console.log(res));

   client.close();
});