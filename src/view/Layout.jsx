const React = require('react');

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/question.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
        />

        <title>{props.title}</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
}

module.exports = Layout;
