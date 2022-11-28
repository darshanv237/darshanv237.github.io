import { HashLink } from "react-router-hash-link";
import { handleClick } from "../Logic";
import Links from "../../assets/Data/Links";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-dark sticky-top"
        id="navbar"
      >
        <div className="container-fluid d-flex">
          <HashLink
            className="navbar-brand px-2 d-none d-lg-block text-white"
            id="nav_home"
            role="tab"
            aria-selected="true"
            aria-controls="offcanvasNavbar"
            aria-current="page"
            to="/#home"
            onClick={handleClick}
            style={{ backgroundColor: "none" }}
          >
          <i className="fa-sharp fa-solid fa-house-chimney"></i>
          </HashLink>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="nav nav-pills ms-auto  d-none d-lg-flex">
            {Links.map((links) => {
              if (links.name != "home")
                return (
                  <li className="nav-item" role="presentation" key={links.name}>
                    <HashLink
                      className="nav-link text-white text-capitalize"
                      id={links.name + "active"}
                      to={"/#" + links.name}
                      onClick={handleClick}
                      style={{ backgroundColor: "none" }}
                      smooth
                    >
                      {links.name}
                    </HashLink>
                  </li>
                );
            })}
          </ul>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end text-bg-dark"
        style={{ opacity: 1, width: "60%" }}
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Welcome
          </h5>
          <button
            id='offcanvas_close'
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav nav-pills ms-auto flex-column">
            {Links.map((links) => {
              return (
                <li
                  className="nav-item bg-dark"
                  role="presentation"
                  key={links.name}
                >
                  <HashLink
                    className="nav-link text-white text-capitalize"
                    id={links.name + "_active"}
                    to={"/#" + links.name}
                    onClick={handleClick}
                    style={{ backgroundColor: "none" }}
                    smooth
                  >
                  <i className={links.icons}></i>
                    {links.name}
                  </HashLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
