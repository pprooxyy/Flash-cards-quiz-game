const React = require('react');

module.exports = function Navbar({ userSession }) {
  return (
    <div className="navbar">
      <img src="/logo.png" alt="asd" className="logo" />
      <ul>
        <li>
          {' '}
          <button className="navbar-button">
            <a href="/statistic/profile">{`Hi,${userSession.nickName}`}</a>{' '}
          </button>
        </li>
        <li>
          {' '}
          <button className="navbar-button">
            <a href="/play">Play</a>{' '}
          </button>
        </li>
        <li>
          <button className="navbar-button">
            <a href="/logout">Log Out</a>
          </button>
        </li>
      </ul>
    </div>
  );
};
