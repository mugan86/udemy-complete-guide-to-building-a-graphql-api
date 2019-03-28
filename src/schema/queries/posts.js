import { GraphQLList } from 'graphql';
import { fakeDatabase } from "../../FakeDatabase";
import { Post } from './../types/Post';

export default {
    posts: {
        type: new GraphQLList(Post),
        description: "Get a list of recen blog posts",
        args: { },
        resolve: function() {
            return fakeDatabase.getBlogPosts();
        }
    }
}