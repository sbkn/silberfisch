import React, {PropTypes} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';


const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    }
});

export default React.createClass({
    displayName: 'Text',

    propTypes: {
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        label: PropTypes.string
    },

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <TextField
                        hintText={this.props.placeholder}
                        floatingLabelText={this.props.label}/>
                </div>
            </MuiThemeProvider>
        );
    }
});