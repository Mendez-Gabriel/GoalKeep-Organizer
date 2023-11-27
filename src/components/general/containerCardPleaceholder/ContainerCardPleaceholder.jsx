import React from 'react';
import CardPleaseholder from '../cardPleaseholder/CardPleaseholder';

const ContainerCardPleaceholder = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center border border-primary'>
        <CardPleaseholder />
        <CardPleaseholder />
        <CardPleaseholder />
        <CardPleaseholder />
        <CardPleaseholder />
        <CardPleaseholder />
    </div>
  )
}

export default ContainerCardPleaceholder;