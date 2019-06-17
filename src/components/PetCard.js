import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PetCard.css';

import speciesEmoji from '../speciesEmoji';


const PetCard = (props) => {
  const { pet, onSelectPet } = props;
  const { id, name, species, about, location } = pet;

  const onClickPet = () => {
    onSelectPet(pet);
  }

  return (
    <div className="card pet-card">

      <section className="pet-card--header">

      { speciesEmoji(species) } {id} - {name} 
        <button onClick={onClickPet}
          className="btn btn-primary pet-card--select-pet-btn"
          >
            Select
        </button>
        <button 
          type="button" 
          className="btn btn-danger pet-card--close-btn" 
          aria-label="Close"
        >
          Close
        </button>
      </section>
      <section className="pet-card--body">
        { about.length > 128 ? `${about.substring(0, 128)}...` : about}
      </section>
      <section className="pet-card--footer text-muted">
        {location}
      </section>
    </div>
  );
};

PetCard.propTypes = {
  pet: PropTypes.object.isRequired,
  onSelectPet: PropTypes.func,
};
    
export default PetCard;
