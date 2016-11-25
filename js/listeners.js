function onSeedChange(e) {
    store.dispatch({
        type: SEED_CHANGE,
        value: e.target.value
    });
}

function onBoardChange(e) {
    store.dispatch({
        type: BOARD_CHANGE,
        value: e.target.value
    });
}

function onSetupFormSubmit(e) {
    e.preventDefault();
    
    store.dispatch({
        type: SETUP_FORM_SUBMIT
    });
}
