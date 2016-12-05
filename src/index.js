import Codenames from './components/Codenames.html';
import constants from 'codenames-constants';
import store from 'redux-store';


const codenames = new Codenames({
    target: document.getElementById('root'),
    data: {
        player: constants.players.AGENTS,
        names: []
    }
});

store.subscribe(() => {
    codenames.set(store.getState());
});
