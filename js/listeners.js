function onSeedChange(e) {
    store.dispatch({
        type: SEED_CHANGE,
        value: e.target.value
    });
}

function onPlayerChange(e) {
    store.dispatch({
        type: PLAYER_CHANGE,
        value: e.target.value
    });
}

function onSetupFormSubmit(e) {
    e.preventDefault();

    store.dispatch({
        type: SETUP_FORM_SUBMIT
    });
}

function onNameClick(name, e) {
    store.dispatch({
        type: REVEAL_NAME,
        value: name
    });
}
