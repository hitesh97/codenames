import createStore from 'redux';
import reducer from './reducer';


const store = createStore(reducer);

store.subscribe(render);

exoprt default store;
