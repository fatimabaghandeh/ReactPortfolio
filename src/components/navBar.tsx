import { Link, useLocation } from "react-router-dom"; 
import cs from 'classnames';

const NavBar = () => {
  const { pathname } = useLocation(); 

  return (
    <header className="fixed top-0 left-0 h-full w-1/5 flex flex-col justify-between p-8 bg-primarybg">
      <ul className="space-y-6">
        <li>
          <Link to='/' className="text-xl font-bold">
            Fatima Baghandeh
          </Link>
        </li>
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
          <a
            href='Resume.pdf'
            target="_blank"
            className="text-primarytext hover:font-bold"
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
