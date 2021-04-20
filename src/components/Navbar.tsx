import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <h1 style={{color: 'white', textShadow: '2px 1px black'}}>
        Pokemon
      </h1>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <Link className='nav-link' to='/'>
           Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;