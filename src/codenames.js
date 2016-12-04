import Codenames from './components/Codenames.html';
import constants from './constants.json';


const codenames = new Codenames({
    target: document.getElementById('root'),
    data: {
        player: constants.players.AGENTS,
        names: [],
        seed: ''
    }
});
