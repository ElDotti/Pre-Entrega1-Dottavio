import { CartWidget } from "./CartWidget";


export const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">D'or</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Perfumes de hombre</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Perfumes de mujer</a>
        </li>
        
        
      </ul>
    </div>
    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav">
            <li className="nav-item justify-content-end">
                <a className="nav-link disabled  "><CartWidget /></a>
            </li>
        </ul>
        </div>
  </div>
</nav>
      </>
    );
  };