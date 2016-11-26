var store = Redux.createStore(reducer);

function reducer(state, action) {
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
            return !!state.seed
                ? Object.assign({}, state, {
                      names: getNames(state.seed),
                      hasStarted: true
                  })
                : state;
        case REVEAL_NAME:
            return Object.assign({}, state, {
                names: state.names.map(function(n) {
                    return action.value === n.value
                        ? Object.assign({}, n, {
                              isRevealed: true
                          })
                        : n;
                })
            });
        default:
            return state;
    }
}

// utils
function getNames(seed) {
    Math.seedrandom(seed);

    var shuffledNames = knuthShuffle(NAMES.slice(0)).slice(0, 25),
        shuffledColors = knuthShuffle(COLORS.slice(0));

    return shuffledNames.map(function(n, i) {
        return {
            value: n,
            color: shuffledColors[i]
        };
    })
}
