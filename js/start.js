var store = Redux.createStore(codenames);

// rander function is called every time action is dispatched to the store
store.subscribe(render);

// dispatch action to set initial state and trigger inital render
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
