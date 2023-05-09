const React = require('react');
const Layout = require('./Layout.jsx');
const Navbar = require('./Navbar.jsx');

function Profile(props) {
  const { allStat } = props;

  return (
    <Layout {...props}>
      <Navbar {...props} />
      <div className="statistic-div">
        <h1>Player statistics:</h1>
        <ul>
          <li>
            Games played: <span>{allStat?.totalGames}</span>
          </li>
          <li>
            Total answers: <span>{allStat?.totalQuestions}</span>
          </li>
          <li>
            Correct answers: <span>{allStat?.totalAnswers}</span>
          </li>
          <li>
            Correct answers(%):{' '}
            <span>
              {(
                (allStat?.totalAnswers / allStat?.totalQuestions) *
                100
              ).toFixed(2)}
            </span>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

module.exports = Profile;
