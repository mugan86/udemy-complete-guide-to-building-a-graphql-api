'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _FakeDatabase = require('../../FakeDatabase');

var _Post = require('./../types/Post');

exports.default = {
    post: {
        type: _Post.Post,
        description: "Gets a specific post",
        args: {
            id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) }
        },
        resolve: function resolve(parent, _ref) {
            var id = _ref.id;

            return _FakeDatabase.fakeDatabase.getBlogPost(id);
        }
    }
};