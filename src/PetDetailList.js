import React from 'react';
import PetInformationItem from './PetInformationItem.js';

const PetDetailList = props =>
    <>
        <h2>Details</h2>
        <dl>
            <PetInformationItem name="Name" value={props.pet.name} />
            <PetInformationItem name="Age" value={props.pet.age} />
            <PetInformationItem name="Type" value={props.pet.PetType.type} />
        </dl>
    </>
    ;

PetDetailList.defaultProps = {
    pet: { PetType: { type: "loading..." }, age: "loading...", name: "loading..." }
}

export default PetDetailList;