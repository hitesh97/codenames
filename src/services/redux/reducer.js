import combineReducers from 'redux';


export default combineReducers({
    seed: seed,
    player: player,
    names: names
});

function names(state, action) {
    state = state || [];

    switch (action.type) {
        case SETUP_FORM_SUBMIT:
            if (!action.seed) {
                return state;
            }

            Math.seedrandom(action.seed);

            return _getInitialNames();
        case REVEAL_NAME:
            return state.map(function(n) {
                return name(n, action);
            });
        default:
            return state;
    }
}

function name(state, action) {
    state = state || {};

    switch (action.type) {
        case REVEAL_NAME:
            if (action.value !== state.value) {
                return state;
            }

            return Object.assign({}, state, {
                isRevealed: true
            });
        default:
            return state;
    }
}

function seed(state, action) {
    state = state || '';

    switch (action.type) {
        case SEED_CHANGE:
            return action.value;
        default:
            return state;
    }
}

function player(state, action) {
    state = state || '';

    switch (action.type) {
        case PLAYER_CHANGE:
            return action.value;
        default:
            return state;
    }
}

// utils
function _getInitialNames() {
    var shuffledNames = knuthShuffle(NAMES.slice(0)).slice(0, 25),
        shuffledColors = knuthShuffle(COLORS.slice(0));

    return shuffledNames.map(function(n, i) {
        return {
            value: n,
            color: shuffledColors[i],
            isRevealed: false
        };
    })
}
