import React from 'react';
import { Link } from 'react-router-dom';
import RevLogo from '../Assets/rev-logo.png';
import { connect } from 'react-redux';
import {FaHandScissors} from 'react-icons/fa'

export class AppNav extends React.PureComponent {
  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
          <div className="navbar-header c-pointer shift-left">
            <Link to="/home" className="unset-anchor">
              <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
            </Link>
            {this.props.clicks}<FaHandScissors />
          </div>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto margin-nav">
              <li className="nav-item active">
                <Link to="/home" className="unset-anchor nav-link">Home</Link>
              </li>
              <li className="nav-item active">
                <Link to="/sign-in" className="unset-anchor nav-link">Sign In</Link>
              </li>
              <li className="nav-item active">
                <Link to="/first" className="unset-anchor nav-link">First</Link>
              </li>
              <li className="nav-item active">
                <Link to="/second" className="unset-anchor nav-link">Second</Link>
              </li>
              <li className="nav-item active">
                <Link to="/clicker" className="unset-anchor nav-link">Clicker</Link>
              </li>
              <li className="nav-item active dropdown">
                <div className="nav-link nav-item dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">League</div>
                <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                  <div className="dropdown-item"><Link to="/view-champions" className="unset-anchor nav-link active">View Champions</Link></div>
                  <div className="dropdown-item"><Link to="/add-champion" className="unset-anchor nav-link active">Add Champion</Link></div>
                </div>
              </li>
              <li className="nav-item active dropdown">
                <div className="nav-link nav-item dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Examples</div>
                <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                  <div className="dropdown-item"><Link to="/movies" className="unset-anchor nav-link active">Movies</Link></div>
                  <div className="dropdown-item"><Link to="/clicker" className="unset-anchor nav-link active">Clicker Game</Link></div>
                  <div className="dropdown-item"><Link to="/tic-tac-toe" className="unset-anchor nav-link active">Tic Tac Toe Game</Link></div>
                  <div className="dropdown-item"><Link to="/chuck-norris" className="unset-anchor nav-link active">Chuck Norris Jokes</Link></div>
                  <div className="dropdown-item"><Link to="/pokemon" className="unset-anchor nav-link active">Pokemon</Link></div>
                </div>
              </li>
              <li className="nav-item active">
                <Link to="/nested" className="unset-anchor nav-link">Nested</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clicks: state.clicker.clicks
  }
}

export default connect(mapStateToProps, {})(AppNav);