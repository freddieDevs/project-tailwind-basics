

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      {/* flex container */}
      <div className="flex align-center justify-between">
        {/* logo */}
        <div className="pt-2">
          <img src="/img/logo.svg" alt=""/>
        </div>
        {/* menu items */}
        <div className=" hidden md:flex space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
          <a href="#" className="hover:text-darkGrayishBlue">Product</a>
          <a href="#" className="hover:text-darkGrayishBlue">About us</a>
          <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
          <a href="#" className="hover:text-darkGrayishBlue">Community</a>
        </div>
        {/* button */}
        <a className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight" href="">Get Started</a>

        {/* Hamburger icon */}
        <button id="menu-btn" className=" block hamburger md:hidden focus:outline">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* mobile Menu */}
      <div className="hidden">
        <div id="menu" className="absolute flex flex-col items-center self-end md:hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About us</a>
          <a href="#">Career</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar