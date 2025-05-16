import React from 'react';
import ReactDOM from 'react-dom';
import Component, {Primeiro, Segundo, Ex2} from "./component"
import SilvaFamily from './silvaFamily';
import Layout from './layout';
import Family from './family';
import Member from './member';
import ClassComponent from './classComponent';
import Field from './field';
ReactDOM.render(
    <Layout>
        <Component/>
        <Ex2 value="Veio do index"/>
        <Primeiro/>
        <Segundo/>
        <SilvaFamily/>
        <Family lastName="Silva">
            <Member name="Paula"></Member>
            <Member name="Vanessa"></Member>
            <Member name="Júlia"></Member>
        </Family>
        <ClassComponent lable="Contador" initialValue={10}/>
        <Field initialValue="0"/>
    </Layout>,
    document.getElementById('app')
);