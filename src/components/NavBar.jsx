function NavBar() {
  const NavForMobileScreen = (event) => {
    event.preventDefault();
    const ul = document.querySelector(".nav ul");
    // ul.style.left = "0";
    ul.classList.toggle("active");
  };
  const closeNav = () => {
    const ul = document.querySelector(".nav ul");
    ul.classList.remove("active");
  };

  return (
    <>
      <div className="nav">
        <a id="hamburger-icon" href="" onClick={NavForMobileScreen}>
          ☰
        </a>
        <ul>
          <li id="close-icon">
            <a onClick={closeNav}>X</a>
          </li>
          <li>
            <a href="#home" onClick={closeNav}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeNav}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeNav}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeNav}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default NavBar;
