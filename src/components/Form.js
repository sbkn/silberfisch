import React from 'react';
import without from 'lodash.without';
import assign from 'lodash.assign';

const noop = () => undefined;

export default class Form extends React.Component {

    static propTypes = {
        children: React.PropTypes.node,
        values: React.PropTypes.object,
        update: React.PropTypes.func,
        reset: React.PropTypes.func,
        onSubmit: React.PropTypes.func
    };

    static childContextTypes = {
        update: React.PropTypes.func,
        reset: React.PropTypes.func,
        submit: React.PropTypes.func,
        values: React.PropTypes.object,
        registerValidation: React.PropTypes.func,
        isFormValid: React.PropTypes.func
    };

    static defaultProps = {
        onSubmit: noop
    };

    constructor(props) {
        super(props);
        this.registerValidation = this.registerValidation.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
        this.validations = [];
    }

    registerValidation(isValidFunc) {
        this.validations = [...this.validations, isValidFunc];
        return this.removeValidation.bind(null, isValidFunc);
    }

    removeValidation(ref) {
        this.validations = without(this.validations, ref);
    }

    isFormValid(showErrors) {
        return this.validations.reduce((memo, isValidFunc) =>
        isValidFunc(showErrors) && memo, true);
    }

    submit() {
        if (this.isFormValid(true)) {
            this.props.onSubmit(assign({}, this.props.values));
            this.props.reset();
        }
    }

    getChildContext() {
        return {
            update: this.props.update,
            reset: this.props.reset,
            submit: this.submit,
            values: this.props.values,
            registerValidation: this.registerValidation,
            isFormValid: this.isFormValid
        };
    }

    render() {
        return (
            <form>
                {this.props.children}
            </form>
        );
    }
}