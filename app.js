const express = require('express');
const {graphqlHTTP} = require('express-graphql')
const schema = require('./graphql/schema')
const {connectDB} = require('./db/index')
const getDataScript = require('./script')



//console.log(getFacts());

connectDB();
const app = express();

app.get("/", getDataScript);

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(3006)
console.log('Server is running in por 3006')