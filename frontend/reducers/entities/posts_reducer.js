import { RECEIVE_ALL_POST, RECEIVE_POST, REMOVE_POST } from "../../actions/post_actions";

const postsReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_POST:
            return action.posts    
        case RECEIVE_POST:
            nextState[action.post.id] = action.post
            return nextState; 
        case REMOVE_POST:
            delete nextState[action.postId];
            return nextState;  
        default:
            return state;
    };
};

export default postsReducer;

