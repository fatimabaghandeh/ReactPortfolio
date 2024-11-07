import { Link, useLocation } from "react-router-dom"; 
import cs from 'classnames';

const Header = () => {
  const { pathname } = useLocation(); 

  return (
    <header className=" ">
      <ul className="flex justify-center md:text-xl lg:justify-end space-x-12 lg:text-xl mt-8">

     
        <li>
          <Link
            to="/projects"
            className={cs(
              "hover:font-bold",
              { "font-bold": pathname === "/projects" } 
            )}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={cs(
              "hover:font-bold",
              { "font-bold": pathname === "/contact" } 
            )}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={cs(
              "hover:font-bold",
              { "font-bold": pathname === "/" } 
            )}
          >
            Home
          </Link>
        </li>
     
      
        
      </ul>
    </header>
  );
};

export default Header;
