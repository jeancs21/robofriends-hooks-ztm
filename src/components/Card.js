import React from 'react';

//para no llamar tanto props.loquesea mejor aplico destructoring
const Card = ({name, email, id}) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5'>
    {/*Esta api de robots retorna una imagen aleatoria de un robot
    atra vez de cualquier nombre que ponga en la url*/}
        <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
  );
};

export default Card;
