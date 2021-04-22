import React from 'react';
import { Link } from 'react-router-dom';

interface ListItemProps {
  pokemon: Pokemon;
}

const ListItem: React.FC<ListItemProps> = ({ pokemon }) => {
  return (
    <li className='list-group-item d-flex justify-content-around align-items-center'>
      {/* section img pulled to left */}
      <img src={pokemon.img} alt={pokemon.name} />
      <div className='poke-info'>
        <h2>
          <Link to={`/pokemon/${pokemon.name.toLowerCase()}`}>
            {pokemon.name}
          </Link>
        </h2>
        <div>
          <small>Height: {pokemon.height}</small>
          <small>Weight: {pokemon.weight}</small>
        </div>
      </div>
      {/* section pokemon name that is wrapped in a link */}
      {/* section for details under the pokemon name */}
    </li>
  );
};

export default ListItem;
