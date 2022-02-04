import React from 'react';
import Card from './Card';
//import { robots } from './robots';

const CardList = ({robots}) => {
    //qué quiero mostrar? un listado de robots
    //cómo? un nuevo arreglo de robots (usando el metodo map).
    return (
        robots.map((user, i) => {
            return (
                <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
                />
            );
        })
    );
};

export default CardList;
