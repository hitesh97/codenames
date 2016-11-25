store.subscribe(render);

render();

function render() {
    ReactDOM.render(
        el(CodeNames, {
            state: store.getState(),
            onSeedChange: onSeedChange,
            onBoardChange: onBoardChange,
            onSetupFormSubmit: onSetupFormSubmit
        }),
        document.getElementById('codenames')
    );
}
