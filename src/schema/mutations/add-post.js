import { fakeDatabase } from "../../FakeDatabase";
import { Post, PostInputType } from './../types/Post';

export default {
    addPost: {
        type: Post,
        description: "Add a post for a blog",
        args: { 
            post:  { type: PostInputType }
        },
        resolve: function( parent, { post } ) {
            return fakeDatabase.addNewBlogPost( post )
        }
    }
}