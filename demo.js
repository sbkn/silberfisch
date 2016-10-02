import React from 'react';
import ReactDOM from 'react-dom';
import Form, {Page} from './src/index';

ReactDOM.render((
    <Form onSubmit={data => console.log(data)}>
        <Page/>
    </Form>
), document.getElementById('container'));