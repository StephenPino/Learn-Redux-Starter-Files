// A reducer takes in 2 things
// 1.) the action (info about what happened)
// 2.) copy of current state

function comments(state = [], action) {
    console.log (state, action);
    return state;
}

export default comments;