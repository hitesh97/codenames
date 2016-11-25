var el = React.createElement,
    cl = React.createClass,
    SetupForm = cl({
        render: function() {
            return (
                el('form', {},
                    el('input', {
                        type: 'text',
                        name: 'seed',
                        placeholder: 'Enter board generator seed'
                    }),
                    el('input', {
                        id: 'form-radio-names',
                        type: 'radio',
                        name: 'board',
                        value: 'names',
                        defaultChecked: true
                    }),
                    el('label', {
                        htmlFor: 'form-radio-names'
                    }, 'Names'),
                    el('input', {
                        id: 'form-radio-code',
                        type: 'radio',
                        name: 'board',
                        value: 'code'
                    }),
                    el('label', {
                        htmlFor: 'form-radio-code'
                    }, 'Code'),
                    el('button', {
                        type: 'submit'
                    }, 'Start')
                )
            );
        }
    }),
    CodeNames = cl({
        render: function() {
            return (
                el('div', {},
                    el(SetupForm)
                )
            );
        }
    });

ReactDOM.render(
    el(CodeNames),
    document.getElementById('codenames')
);
