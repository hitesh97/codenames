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
                placeholder: 'Enter seed to generate code',
                onChange: gameObj.onSeedChange
            }),
            el('div', {
                onChange: gameObj.onBoardChange
            },
                el('input', {
                    id: 'form-radio-names',
                    type: 'radio',
                    name: 'board',
                    value: NAMES
                }),
                el('label', {
                    htmlFor: 'form-radio-names'
                }, 'Names'),
                el('input', {
                    id: 'form-radio-code',
                    type: 'radio',
                    name: 'board',
                    value: CODE
                }),
                el('label', {
                    htmlFor: 'form-radio-code'
                }, 'Code')
            ),
            el('button', {
                type: 'submit'
            }, 'Start')
        )
    );
}

function Board(gameObj) {
    // gameObj.state.names.map
    return (
        el('div', {
            className: 'Board'
        },
            el(Name, {
                value: 'echo',
                color: 'red',
                revealed: false
            })
        )
    );
}

function Name(name) {
    return el('div', {
        className: 'Name ' + name.color
    }, name.value);
}
