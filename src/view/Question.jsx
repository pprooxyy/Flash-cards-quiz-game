const React = require('react');

function Question({ el }) {
  console.log(el);
  return (
    <>
      <h2 className="card-title">{el.question}</h2>
      <div className="form-container">
        <div className="form-check left">
          <label className="form-check-label" htmlFor="0">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id={`0@${el.id}`}
            />{' '}
            <span className="span-input">{el.answer0}</span>
          </label>
          <label className="form-check-label" htmlFor="1">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id={`1@${el.id}`}
            />{' '}
            <span className="span-input">{el.answer1}</span>
          </label>
        </div>
        <div className="form-check right">
          <label className="form-check-label" htmlFor="2">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id={`2@${el.id}`}
            />{' '}
            <span className="span-input">{el.answer2}</span>
          </label>
          <label className="form-check-label" htmlFor="3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id={`3@${el.id}`}
            />{' '}
            <span className="span-input">{el.answer3}</span>
          </label>
        </div>
      </div>
    </>
  );
}

module.exports = Question;
