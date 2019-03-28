'use strict';

var _graphql = require('graphql');

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = '\n    {\n        posts {\n            id\n            title\n            author {\n                name\n            }\n        }\n    }\n';

(0, _graphql.graphql)(_schema2.default, query).then(function (result) {
    console.log(JSON.stringify(result, null, 2));
}).catch(function (error) {
    console.log(error);
});