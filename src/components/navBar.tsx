
const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 h-full w-1/5 flex flex-col justify-between p-8 bg-primarybg">
      <ul className="space-y-6">
        <li>
          <a href='/' className="text-xl font-bold">
            Fatima Baghandeh
          </a>
        </li>
        <li>
          <a >
            Projects
          </a>
        </li>
        <li>
          <a className="">
            Contact
          </a>
        </li>
        <li>
          <a href='fatimaBaghandehResume.pdf' target="_blank" className=" p-2 -ml-2 rounded-lg text-primarytext">
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
