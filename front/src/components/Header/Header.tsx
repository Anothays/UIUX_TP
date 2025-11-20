import { Link } from "react-router";

function Header() {
  return (
    <div className="navbar navbar-center bg-base-100 shadow-lg ">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          CarsDirectory
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link to="/discover" className="btn btn-ghost">
              Je recherche un véhicule
            </Link>
          </li>
          <li>
            <Link to="/productsPage" className="btn btn-ghost">
              Voitures à vendre
            </Link>
          </li>
          <li>
            <Link to="/sell" className="btn btn-ghost">
              Vendre votre voiture
            </Link>
          </li>
          <li>
            <Link to="/profil" className="btn btn-ghost">
              Mon profile
            </Link>
          </li>
          <li>
            <Link to="/contact" className="btn btn-ghost">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
