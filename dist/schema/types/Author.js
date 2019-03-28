'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Author = undefined;

var _graphql = require('graphql');

var _FakeDatabase = require('./../../FakeDatabase');

var _Post = require('./Post');

var Author = exports.Author = new _graphql.GraphQLObjectType({
    name: 'Author',
    description: 'All details of an author on the website',
    fields: function fields() {
        return {
            id: { type: _graphql.GraphQLString },
            name: { type: _graphql.GraphQLString },
            email: { type: _graphql.GraphQLString },
            post: {
                type: new _graphql.GraphQLList(_Post.Post),
                resolve: function resolve(author) {
                    return _FakeDatabase.fakeDatabase.getPostsOfAuthor(author.id);
                }
            }
        };
    }
});