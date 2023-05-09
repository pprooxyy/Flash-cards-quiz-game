const React = require('react');
const Layout = require('./Layout.jsx');
const Question = require('./Question.jsx');
const Navbar = require('./Navbar.jsx');

function Quiz(props) {
  const { quizQuestion, deskId, userSession } = props;
  console.log(quizQuestion);
  return (
    <Layout {...props}>
      <Navbar {...props} />
      <div className="quiz-container">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {quizQuestion.map((element, index) => (
              <div className="swiper-slide">
                <form
                  className="quiz-form "
                  action="/post-game-statistic"
                  method="POST"
                >
                  <Question el={element} />
                  <div id={element.id} className="swiper-button-next" />
                  <div className="swiper-button-prev swiper-button-disabled" />
                  {index === quizQuestion.length - 1 ? (
                    <button
                      type="submit"
                      name={`${deskId}@${quizQuestion.length}@${userSession.id}`}
                      className="submit-quiz"
                    >
                      submit
                    </button>
                  ) : null}
                </form>
              </div>
            ))}
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js" />
      <script src="/js/quizquestions.js" />
    </Layout>
  );
}

module.exports = Quiz;
