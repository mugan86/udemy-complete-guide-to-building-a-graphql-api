import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

console.log('Starting server...');
app.listen(process.env.PORT || 5000);