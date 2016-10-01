import React from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    }
});


export default class SubmitButton extends React.Component {

    static propTypes = {
        label: React.PropTypes.string
    };

    static contextTypes = {
        isFormValid: React.PropTypes.func.isRequired,
        submit: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        label: 'Submit'
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>

                <div>
                    <RaisedButton
                        primary
                        disabled={!this.context.isFormValid()}
                        label={this.props.label}
                        onTouchTap={this.context.submit}/>
                </div>
            </MuiThemeProvider>
        );
    }
}