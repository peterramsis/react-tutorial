const Navbar = () => {
  return (
    <header className="bg-sky-500">
        <div className="container text-center">
          <div class="flex flex-row justify-center items-center h-20">
              <div class="basis-1/4">
                 <section className="logo text-white">
                      Site Logo
                 </section>
              </div>
              <div class="basis-1/4">
                 <ul className="flex flex-row text-white">
                    <li>
                       <a href="/" className="hover:text-gray-600 h-20">Home</a>
                    </li>
                    <li>
                       <a href="/about" className="hover:text-gray-600 h-20">About</a>
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
