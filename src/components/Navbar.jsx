import { Link } from 'react-router-dom';
import logo from '../../public/assets/images/groceries.png'; 
import { PATHS } from '../../routes';

const Navbar=()=>{
    return (<nav className="flex items-center justify-between p-6 font-mont" aria-label="Global">
    <div className="flex lg:flex-1">
    <Link to={PATHS.HOME} className="-m-1.5 p-1.5 flex justify-center items-center">
        <img className="h-4 w-auto" src={logo} alt=""/>
        <div className='flex font-display text-dark-green ml-1'>FReshMarT
        </div>
      </Link>
    </div>
   
    <div className="hidden lg:flex lg:gap-x-8">
      <Link to={PATHS.HOME} className="font-semibold leading-6 text-gray-900 hover:font-bold">Home</Link>
      <Link to={PATHS.ABOUT} className="font-semibold leading-6 text-gray-900 hover:font-bold">About</Link>
      <Link to={PATHS.CATEGORIES} className="font-semibold leading-6 text-gray-900 hover:font-bold">Categories</Link>
      <Link to={PATHS.CONTACT} className="font-semibold leading-6 text-gray-900 hover:font-bold">Contact</Link>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <button className="text-white text-sm font-semibold bg-dark-green px-2 py-2 rounded-full hover:font-bold"><Link to={PATHS.PARTNER}>Partner with Us</Link></button>
    </div> 
  </nav>)
}
export default Navbar;