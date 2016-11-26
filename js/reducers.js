function codenames(state, action) {
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
            if (!state.seed) {
                return state;
            }
            
            Math.seedrandom(state.seed);

            return Object.assign({}, state, {
                names: names(state.names, action),
                hasStarted: true
            });
        case REVEAL_NAME:
            return Object.assign({}, state, {
                names: names(state.names, action)
            });
        default:
            return state;
    }
}

function names(state, action) {
    state = state || _getInitialNames();

    switch (action.type) {
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
