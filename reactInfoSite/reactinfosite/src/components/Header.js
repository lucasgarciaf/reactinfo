import logo from "../images/logo512.png";

export default function Header() {
  return (
    <header>
      <nav>
        <img className="nav-logo" src={logo} alt="react-logo" />
        <h3 className="nav-logo-text">React Facts</h3>
        <h4 className="nav-title">React Course - Project 1</h4>
        <h4>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </h4>
      </nav>
    </header>
  );
}
