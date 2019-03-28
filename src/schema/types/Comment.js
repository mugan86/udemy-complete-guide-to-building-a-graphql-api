import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLInputObjectType } from 'graphql';

// postId not add because that field creates a relationship with the post
export const Comment = new GraphQLObjectType({
    name: 'Comment',
    description: 'Details of comments',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        content: { type: GraphQLString }
    })
});

export const CommentInputType = new GraphQLInputObjectType({
    name: "CommentInput",
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
        postId: { type: new GraphQLNonNull(GraphQLInt) }
    }
});