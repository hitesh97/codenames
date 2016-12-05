import Codenames from './components/Codenames.html';
import constants from 'codenames-constants';
import store from 'redux-store';


store.dispatch({
    type: constants.actionTypes.PLAYER_CHANGE,
    value: constants.players.AGENTS
});

const codenames = new Codenames({
    target: document.getElementById('root'),
    data: store.getState()
});

store.subscribe(() => {
    codenames.set(store.getState());
});
