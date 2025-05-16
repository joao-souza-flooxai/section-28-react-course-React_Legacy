import React from 'react';

export default () => (<h1>Primeiro Componente!</h1>);

export function Ex2(props){ 
    return(
        <h1>Ex2 {props.value}!</h1>
    );
};

const Primeiro = props =>(
    <h1>1- Ex3</h1>
);

const Segundo = props => <h1>2- Ex3</h1>


export {Primeiro, Segundo}