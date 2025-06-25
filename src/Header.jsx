import { Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';

function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-black text-white sticky top-0 z-50">
      <div className="flex items-center">
        <img  className="h-8"  />
        <br />
        <p>Christopher Doss Jr.</p>
        
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li className='font-medium text-[#45c7fe] hover:text-white no-underline space-x-4'><Link to="/">Home</Link></li>
          <li className='font-medium text-[#45c7fe] hover:text-white no-underline space-x-4'><Link to="/about">About Me</Link></li>
          <li className='font-medium text-[#45c7fe] hover:text-white no-underline space-x-4'><Link to="/exp">Experience</Link></li>
          <li className='font-medium text-[#45c7fe] hover:text-white no-underline space-x-4'><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
