'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostInputType = exports.Post = undefined;

var _graphql = require('graphql');

var _Author = require('./Author');

var _Comment = require('./Comment');

var _FakeDatabase = require('./../../FakeDatabase');

// author is a relationship
var Post = exports.Post = new _graphql.GraphQLObjectType({
    name: 'Post',
    description: 'All details of a blog post',
    fields: function fields() {
        return {
            id: { type: _graphql.GraphQLInt },
            title: { type: _graphql.GraphQLString },
            content: { type: _graphql.GraphQLString },
            author: {
                type: _Author.Author,
                resolve: function resolve(post) {
                    return _FakeDatabase.fakeDatabase.getAuthor(post.author);
                }
            },
            comments: {
                type: new _graphql.GraphQLList(_Comment.Comment),
                resolve: function resolve(post) {
                    return _FakeDatabase.fakeDatabase.getCommentsForPost(post.id);
                }
            }
        };
    }
});

var PostInputType = exports.PostInputType = new _graphql.GraphQLInputObjectType({
    name: "PostInput",
    fields: {
        title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        author: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    }
});