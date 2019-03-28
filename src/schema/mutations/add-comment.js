import { fakeDatabase } from "../../FakeDatabase";
import { Comment, CommentInputType } from './../types/Comment';

export default {
    addComment: {
        type: Comment,
        description: "Add a comment for a blog post",
        args: { 
            comment:  { type: CommentInputType }
        },
        resolve: function( parent, { comment } ) {
            return fakeDatabase.addNewComment( comment )
        }
    }
}