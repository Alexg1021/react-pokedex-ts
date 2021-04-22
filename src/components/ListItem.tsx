import React from 'react';
import { Link } from 'react-router-dom';
import { setTypeColor } from '../services';

interface ListItemProps {
  pokemon: Pokemon;
}

const ListItem: React.FC<ListItemProps> = ({ pokemon }) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {/* section img pulled to left */}
      <img src={pokemon.img} alt={pokemon.name} />
      <div className='poke-info'>
        <h2>
          <Link to={`/pokemon/${pokemon.name.toLowerCase()}`}>
            {pokemon.name}
          </Link>
        </h2>
        <div>
          <small>Height: {pokemon.height}</small> {' | '}
          <small>Weight: {pokemon.weight}</small>
        </div>
      </div>
      <div className='poke-details'>
        <div>
          <div className='text-secondary'>Type:</div>
          <div>
            {pokemon.type.map((t, i) => {
              return (
                <span
                  className='badge badge-pill text-white mr-1'
                  style={{ backgroundColor: setTypeColor(t) }}
                  key={i}>
                  {t}
                </span>
              );
            })}
          </div>
        </div>

        <div>
          <div className='text-secondary'>Weaknesses</div>
          <div>
            {pokemon.weaknesses.map((w, i) => {
              return (
                <span
                  className='badge badge-pill text-white mr-1'
                  style={{ backgroundColor: setTypeColor(w) }}
                  key={i}>
                  {w}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      {/* section pokemon name that is wrapped in a link */}
      {/* section for details under the pokemon name */}
    </li>
  );
};

export default ListItem;
