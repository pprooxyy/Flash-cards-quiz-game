const React = require('react');
const Layout = require('../Layout');

module.exports = function Registration(props) {
  return (
    <Layout>
      <div className="registration-form-wrapper">
        <form method="POST" action="/register" className="registration-form">
          <div className="registaration-form-container">
            <h1>Register</h1>
            <p>Kindly fill in this form to register.</p>
            <label htmlFor="username">
              <b>Username:</b>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              name="name"
              id="name"
              required
            />

            <label htmlFor="email">
              <b>Email:</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />

            <label htmlFor="pwd">
              <b>Password:</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              required
            />

            <button className="button-27 reg" type="submit">
              Register
            </button>
          </div>
          <div>
            <p className="register-p">
              Already have an account? <a href="/login">Log in</a>.
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};
