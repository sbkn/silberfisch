import React from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import {SubmitButton, Text} from '../index';


const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    }
});


export default class Page extends React.Component {

    static propTypes = {};

    static contextTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Tabs>
                        <Tab label="First">
                            <Text
                                name="firstname"
                                validate={['required', 'name']}
                                placeholder="Type your first name here"
                                label="Your name"/>
                            <Text
                                name="email"
                                validate={['required', 'email']}
                                placeholder="Type your email here"
                                label="E-mail"/>
                            <Text
                                name="url"
                                validate={['required']}
                                placeholder="Type your website url here"
                                label="Website"/>
                        </Tab>
                        <Tab label="Second">
                            <Text
                                name="bankname"
                                validate={['required']}
                                placeholder="Type your bank name here"
                                label="Bank name"/>
                            <Text
                                name="iban"
                                validate={['required']}
                                placeholder="Type your IBAN here"
                                label="Your IBAN"/>

                            <SubmitButton/>
                        </Tab>
                    </Tabs>
                </div>
            </MuiThemeProvider>
        );
    }
}