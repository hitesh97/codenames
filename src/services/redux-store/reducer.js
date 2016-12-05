import { combineReducers } from 'redux';
import constants from 'codenames-constants';
import seedrandom from 'seedrandom';
import { knuthShuffle } from 'knuth-shuffle';


export default combineReducers({
    player,
    names
})


function names(state = [], action) {
    switch (action.type) {
        case constants.actionTypes.SETUP_FORM_SUBMIT:
            if (!action.seed) {
                return state;
            }

            return _getInitialNames(action.seed);
        case constants.actionTypes.REVEAL_NAME:
            return state.map(n => name(n, action));
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

function player(state = '', action) {
    switch (action.type) {
        case constants.actionTypes.SETUP_FORM_SUBMIT:
            return action.player;
        default:
            return state;
    }
}

// utils
function _getInitialNames(seed) {
    seedrandom(seed, {global: true});

    var shuffledNames = knuthShuffle(constants.NAMES.slice(0)).slice(0, 25),
        shuffledColors = knuthShuffle(constants.COLORS.slice(0));

    return shuffledNames.map(function(n, i) {
        return {
            value: n,
            color: shuffledColors[i],
            isRevealed: false
        };
    })
}
