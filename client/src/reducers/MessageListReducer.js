const MessageListReducer = (state, action) => {
    let draftstate = [...state];
    switch (action.type) {
        case "addMessage":
            return [...draftstate, action.payload];
        default:
            return state;
    }
};

export default MessageListReducer;
