var el = React.createElement;

function CodeNames(gameObj) {
    return gameObj.state.hasStarted
        ? el(Board, gameObj)
        : el(SetupForm, gameObj);
}

function SetupForm(gameObj) {
    return (
        el('form', {
            onSubmit: gameObj.onSetupFormSubmit
        },
            el('input', {
                type: 'text',
                name: 'seed',
                placeholder: 'Enter seed to generate board',
                onChange: gameObj.onSeedChange
            }),
            el('div', {
                onChange: gameObj.onPlayerChange
            },
                el('input', {
                    id: 'form-radio-agents',
                    type: 'radio',
                    name: 'player',
                    value: AGENTS,
                    checked: gameObj.state.player === AGENTS
                }),
                el('label', {
                    htmlFor: 'form-radio-agents'
                }, 'Agents'),
                el('input', {
                    id: 'form-radio-spymaster',
                    type: 'radio',
                    name: 'player',
                    value: SPYMASTER,
                    checked: gameObj.state.player === SPYMASTER
                }),
                el('label', {
                    htmlFor: 'form-radio-spymaster'
                }, 'Spymaster')
            ),
            el('button', {
                type: 'submit'
            }, 'Start')
        )
    );
}

function Board(gameObj) {
    return (
        el('div', {
            id: 'Board',
            className: gameObj.state.player
        },
            gameObj.state.names.map(el.bind(null, Name))
        )
    );
}

function Name(name) {
    return el('div', {
        className: 'Name ' + name.color
    }, name.value);
}
