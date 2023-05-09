const React = require('react');
const Layout = require('../Layout');
const Navbar = require('../Navbar');

module.exports = function Desk({ cards, userSession }) {
  return (
    <Layout>
      <Navbar userSession={userSession} />
      <div className="container">
        <h1>Welcome to &quot;Answer the Question&quot; game!</h1>
        <div className="swiper Slider-container">
          <div className="swiper-wrapper">
            {cards.map((element) => (
              <div
                id={`Try to answer on ${element.quest_count} questions about: ${element.title}`}
                className="swiper-slide"
              >
                {`${element.id}. ${element.title}`}
                <img src={element.picture} alt="123" />
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="button-27">
          select deck
        </button>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js" />
      <script src="/js/js.swiper.js" />
    </Layout>
  );
};
