// reducer
var reducer = function(state, action) {
        state = state || {};

        switch (action.type) {
            case SEED_CHANGE:
                return Object.assign({}, state, {
                    seed: action.value
                });
            case BOARD_CHANGE:
                return Object.assign({}, state, {
                    board: action.value
                });
            case SETUP_FORM_SUBMIT:
                return Object.assign({}, state, {
                    hasStarted: true
                });
            default:
                return state;
        }
    },
    store = Redux.createStore(reducer);
