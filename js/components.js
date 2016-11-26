var el = React.createElement;

function CodeNames(gameObj) {
    return gameObj.state.hasStarted
        ? el(Board, gameObj)
        : el(Setup, gameObj);
}

function Setup(gameObj) {
    return (
        el('div', {
            id: 'Setup'
        },
            el('h1', {
                id: 'Setup-title'
            }, 'Codenames'),
            el(SetupForm, gameObj)
        )
    );
}

function SetupForm(gameObj) {
    return (
        el('form', {
            id: 'SetupForm',
            onSubmit: gameObj.onSetupFormSubmit
        },
            el('input', {
                id: 'SetupForm-input-text',
                type: 'text',
                name: 'seed',
                placeholder: 'Enter seed to generate board',
                onChange: gameObj.onSeedChange
            }),
            el('ul', {
                id: 'SetupForm-player',
                onChange: gameObj.onPlayerChange
            },
                el('li', {
                    className: 'SetupForm-input-radio'
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
                    }, 'Agents')
                ),
                el('li', {
                    className: 'SetupForm-input-radio'
                },
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
                )
            ),
            el('button', {
                id: 'SetupForm-button-submit',
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
            gameObj.state.names.map(function(name) {
                return el(Name, Object.assign({}, name, {
                    key: name.value,
                    onClick: gameObj.onNameClick.bind(null, name.value),
                    player: gameObj.state.player
                }));
            })
        )
    );
}

function Name(name) {
    return (
        el('div', {
            className: _getNameClassName(name),
            onClick: name.onClick
        },
            el('div', {
                className: 'text'
            }, name.value)
        )
    );
}

// utils
function _getNameClassName(name) {
    return 'Name ' + (name.player === SPYMASTER || name.isRevealed ? name.color : '');
}
