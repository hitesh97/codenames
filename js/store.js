// reducer
var reducer = function(state, action) {
        state = state || {};

        switch (action.type) {
            case SEED_CHANGE:
                return Object.assign({}, state, {
                    seed: action.value
                });
            case PLAYER_CHANGE:
                return Object.assign({}, state, {
                    player: action.value
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
