import { combineReducers } from 'redux';
import constants from 'codenames-constants';


export default combineReducers({
    seed,
    player,
    names
})


function names(state = [], action) {
    switch (action.type) {
        case constants.actionTypes.SETUP_FORM_SUBMIT:
            if (!action.seed) {
                return state;
            }

            return _getInitialNames();
        case constants.actionTypes.REVEAL_NAME:
            return state.map(function(n) {
                return name(n, action);
            });
        default:
            return state;
    }
}

function name(state = {}, action) {
    switch (action.type) {
        case constants.actionTypes.REVEAL_NAME:
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

function seed(state = '', action) {
    switch (action.type) {
        case constants.actionTypes.SEED_CHANGE:
            return action.value;
        default:
            return state;
    }
}

function player(state = '', action) {
    switch (action.type) {
        case constants.actionTypes.PLAYER_CHANGE:
            return action.value;
        default:
            return state;
    }
}

// utils
function _getInitialNames() {
    Math.seedrandom(action.seed);

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
