import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.use('/graphql', graphqlHTTP ({
    schema,
    graphiql: true
}));

console.log('Starting server...');
app.listen(4500);