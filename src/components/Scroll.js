import React from 'react';

const Scroll = (props) => {
    //props.children es basicamente lo que sea que esté adentro de este componente
  return (
      //{{}} primeras llaves: javascript. Segunda llave: objeto que puede tener estilos
      <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
          {props.children}
      </div>
  )
};

export default Scroll;
