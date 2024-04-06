const Navbar = () => {
  return (
    <header className="bg-sky-500">
      <div className="container md:container lg:container sm:container text-center">
        <div className=" grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 justify-center items-center h-20">
          <div className="basis-1/4">
            <section className="logo text-white">Site Logo</section>
          </div>
          <div className="basis-1/4">
            <ul className="flex flex-row text-white gap-2">
              <li>
                <a href="/" className="hover:text-gray-600 h-20">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-600 h-20">
                  About
                </a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
