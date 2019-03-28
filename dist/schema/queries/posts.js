'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _FakeDatabase = require('../../FakeDatabase');

var _Post = require('./../types/Post');

exports.default = {
    posts: {
        type: new _graphql.GraphQLList(_Post.Post),
        description: "Get a list of recen blog posts",
        args: {},
        resolve: function resolve() {
            return _FakeDatabase.fakeDatabase.getBlogPosts();
        }
    }
};