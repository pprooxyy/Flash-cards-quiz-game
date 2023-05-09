const React = require('react');
const Layout = require('./Layout.jsx');
const Navbar = require('./Navbar.jsx');

function Statistic(props) {
  const { lastGame } = props;

  return (
    <Layout {...props}>
      <Navbar {...props} />
      <div className="statistic-div">
        <h1>Post-game statistic:</h1>
        <ul>
          <li>
            Game id: <span>{lastGame?.deskId}</span>
          </li>
          <li>
            Correct answers: <span>{lastGame?.correctAnswerCount}</span>
          </li>
          <li>
            Total answers: <span>{lastGame?.questionCount}</span>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

module.exports = Statistic;
