module.exports = (question, answer) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Can you tell me...?</title>
    <meta name="description" content="${question}?">
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <header>
    <p>
      Can you tell me...
    </p>
    <h1>${question}?</h1>
      </header>
      <main>
        <p>
          We asked around, <br/ >did some research, <br/ >ran some numbers,<br/ > and...<span class="answer">${answer}</span>
        </p>
        <p class="cta">
          <a href="/" >Anything else we can help with?</a>
        </p>
    </main>
    <footer>
      <p>
        Made by <a href="https://twitter.com/philhawksworth">Phil Hawksworth</a> because we all need these answers.
      </p>
      <p>
        (And as a little demonstration of <a href="https://jamstack.org/glossary/dpr/">DPR</a> using <a href="https://www.netlify.com/">Netlify</a>'s <a href="https://www.netlify.com/blog/2021/04/14/faster-builds-for-large-sites-on-netlify-with-on-demand-builders-now-in-early-access/#main">On Demand Builder</a> functions)
      </p>
      <p>
        Explore the code, and create your own version of the site to exoperiment with in a couple of clicks from the <a href="https://github.com/philhawksworth/canyoutell.me">GitHub repository</a>
      </p>
    </footer>
  </body>
  </html>
  `;
};