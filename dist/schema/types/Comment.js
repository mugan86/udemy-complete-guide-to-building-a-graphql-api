'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommentInputType = exports.Comment = undefined;

var _graphql = require('graphql');

// postId not add because that field creates a relationship with the post
var Comment = exports.Comment = new _graphql.GraphQLObjectType({
    name: 'Comment',
    description: 'Details of comments',
    fields: function fields() {
        return {
            id: { type: _graphql.GraphQLInt },
            name: { type: _graphql.GraphQLString },
            content: { type: _graphql.GraphQLString }
        };
    }
});

var CommentInputType = exports.CommentInputType = new _graphql.GraphQLInputObjectType({
    name: "CommentInput",
    fields: {
        name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        postId: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) }
    }
});