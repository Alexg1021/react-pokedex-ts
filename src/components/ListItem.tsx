import React from 'react';
import { Link } from 'react-router-dom';

interface ListItemProps {
  poke: Pokemon;
  index: number;
}

const ListItem: React.FC<ListItemProps> = ({ poke, index }) => {
  return (
    <li
      className='list-group-item d-flex justify-content-around align-items-center'
      key={index}>
      {/* section img pulled to left */}
      <img src={poke.img} alt={poke.name} />
      <div className='poke-info'>
        <h2>
          <Link to={`/pokemon/${poke.name.toLowerCase()}`}>{poke.name}</Link>
        </h2>
        <div>
          <small>Height: {poke.height}</small>
          <small>Weight: {poke.weight}</small>
        </div>
      </div>
      {/* section pokemon name that is wrapped in a link */}
      {/* section for details under the pokemon name */}
    </li>
  );
};

export default ListItem;
