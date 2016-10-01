import React from 'react';

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
        values: React.PropTypes.object
    };

    getChildContext() {
        return {
            update: this.props.update,
            reset: this.props.reset,
            submit: this.submit,
            values: this.props.values
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