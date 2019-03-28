import { GraphQLSchema, GraphQLObjectType } from 'graphql';

// Queries
import post from './queries/post';
import posts from './queries/posts';
import author from './queries/author';

// Mutations
import addPost from './mutations/add-post';
import addComment from './mutations/add-comment';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Rootquery',
        fields: () => ({
            ...posts,
            ...post,
            ...author
        })
    }),
    mutation: new GraphQLObjectType({
        name: 'Rootmutation',
        fields: () => ({
            ...addComment,
            ...addPost
        })
    })
});

// Expected {} to be a GraphQL schema ---> Error solved
export default schema;