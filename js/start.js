var store = Redux.createStore(codenames);

store.subscribe(render);

// dispatch action to set initial state
store.dispatch({
    type: PLAYER_CHANGE,
    value: AGENTS
});

function render() {
    ReactDOM.render(
        el(CodeNames, {
            state: store.getState(),
            onSeedChange: onSeedChange,
            onPlayerChange: onPlayerChange,
            onSetupFormSubmit: onSetupFormSubmit,
            onNameClick: onNameClick
        }),
        document.getElementById('codenames')
    );
}
