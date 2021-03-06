import React, {Component} from 'react';
import 'bootstrap/js/src/collapse';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Footy Scraper</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
          <Link className="nav-item nav-link" to="/analysis">Analysis</Link>
        </div>
      </div>
    </nav>;
  }
}

export default NavBar;
