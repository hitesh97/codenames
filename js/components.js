var el = React.createElement;

function CodeNames(gameObj) {
    return gameObj.state.names.length
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
                id: 'SetupForm-seed',
                type: 'text',
                name: 'seed',
                placeholder: 'Enter seed to generate board',
                onChange: gameObj.onSeedChange
            }),
            el('ul', {
                id: 'SetupForm-player'
            },
                [AGENTS, SPYMASTER].map(function(player) {
                    return el(SetupFormInputRadio, {
                        key: player,
                        name: 'player',
                        value: player,
                        current: gameObj.state.player,
                        onChange: gameObj.onPlayerChange
                    });
                })
            ),
            el('button', {
                id: 'SetupForm-button-submit',
                type: 'submit'
            }, 'Start')
        )
    );
}


function SetupFormInputRadio(radio) {
    var identifier = 'form-radio-' + radio.value;

    return (
        el('li', {
            className: 'SetupFormInputRadio'
        },
            el('input', {
                id: identifier,
                type: 'radio',
                name: radio.name,
                value: radio.value,
                checked: radio.current === radio.value,
                onChange: radio.onChange
            }),
            el('label', {
                htmlFor: identifier
            }, radio.value[0].toUpperCase() + radio.value.slice(1))
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
                    onClick: gameObj.onNameClick,
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
            onClick: name.onClick(name.value)
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
