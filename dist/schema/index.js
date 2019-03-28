'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Queries


// Mutations


var _graphql = require('graphql');

var _post = require('./queries/post');

var _post2 = _interopRequireDefault(_post);

var _posts = require('./queries/posts');

var _posts2 = _interopRequireDefault(_posts);

var _author = require('./queries/author');

var _author2 = _interopRequireDefault(_author);

var _addPost = require('./mutations/add-post');

var _addPost2 = _interopRequireDefault(_addPost);

var _addComment = require('./mutations/add-comment');

var _addComment2 = _interopRequireDefault(_addComment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
        name: 'Rootquery',
        fields: function fields() {
            return _extends({}, _posts2.default, _post2.default, _author2.default);
        }
    }),
    mutation: new _graphql.GraphQLObjectType({
        name: 'Rootmutation',
        fields: function fields() {
            return _extends({}, _addComment2.default, _addPost2.default);
        }
    })
});

// Expected {} to be a GraphQL schema ---> Error solved
exports.default = schema;