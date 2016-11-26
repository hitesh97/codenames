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
            gameObj.state.names.map(function(name, i) {
                return el(Name(gameObj), Object.assign({}, name, {key:i}));
            })
        )
    );
}

function Name(gameObj) {
    return function(name) {
        return (
            el('div', {
                className: _getNameClassName(gameObj.state.player, name),
                onClick: gameObj.onNameClick.bind(null, name.value)
            },
                el('div', {
                    className: 'text'
                }, name.value)
            )
        );
    };
}

// utils
function _getNameClassName(player, name) {
    return 'Name ' + (player === SPYMASTER || name.isRevealed ? name.color : '');
}
