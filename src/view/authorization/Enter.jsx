const React = require('react');
const Layout = require('../Layout');

module.exports = function Enter(props) {
  return (
    <Layout>
      <div className="registration-form-wrapper">
        <form
          name="enter-form"
          className="registration-form"
          method="POST"
          action="/login"
        >
          <div className="registaration-form-container">
            <h1>Log In</h1>
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
              id="pwd"
              required
            />

            <button className="button-27 reg" type="submit">
              Enter
            </button>
            <div>
              <p className="register-p">
                Don&apos;t have an account? <a href="/">Register</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};
