store.subscribe(render);

// set initial state
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
            onSetupFormSubmit: onSetupFormSubmit
        }),
        document.getElementById('codenames')
    );
}
