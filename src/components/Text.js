import React from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import * as validators from '../validators';


const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    }
});


export default class Text extends React.Component {

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        placeholder: React.PropTypes.string,
        label: React.PropTypes.string,
        validate: React.PropTypes.arrayOf(React.PropTypes.string)
    };

    static contextTypes = {
        update: React.PropTypes.func.isRequired,
        values: React.PropTypes.object.isRequired,
        registerValidation: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        validate: []
    };

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.isValid = this.isValid.bind(this);
        this.state = {errors: []};
    }

    componentWillMount() {
        this.removeValidationFromContext = this.context.registerValidation(show =>
            this.isValid(show));
    }

    componentWillUnmount() {
        this.removeValidationFromContext();
    }

    updateValue(value) {
        this.context.update(this.props.name, value);

        if (this.state.errors.length) {
            setTimeout(() => this.isValid(true), 0);
        }
    }

    onChange(event) {
        this.updateValue(event.target.value)
    }

    isValid(showErrors) {
        const errors = this.props.validate
            .reduce((memo, currentName) =>
                memo.concat(validators[currentName](
                    this.context.values[this.props.name]
                )), []);

        if (showErrors) {
            this.setState({
                errors
            });
        }
        return !errors.length;
    }

    onBlur() {
        this.isValid(true);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <TextField
                        hintText={this.props.placeholder}
                        floatingLabelText={this.props.label}
                        value={this.context.values[this.props.name]}
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                        errorText={this.state.errors.length ? (
                            <div>
                                {this.state.errors.map((error, i) => <div key={i}>{error}</div>)}
                            </div>
                        ) : null}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}