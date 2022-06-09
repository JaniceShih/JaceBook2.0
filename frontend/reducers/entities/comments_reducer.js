import { RECEIVE_ALL_COMMENT, RECEIVE_COMMENT, REMOVE_COMMENT } from "../../actions/comment_actions";

const commentsReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_COMMENT:
            return action.comments   
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState; 
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;  
        default:
            return state;
    };
};

export default commentsReducer;

