require('@babel/register');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

//*                     компонент jsx, пропсы, ответ от сервера
function renderTemplate(reactComponent, props, res, req) {
  const reactElement = React.createElement(reactComponent, {
    ...props,
    ...res.app.locals,
    ...res.locals,
    userSession: req.session?.user || '',
  });
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  res.send(`<!DOCTYPE html>${html}`);
  res.end();
}

module.exports = renderTemplate;
