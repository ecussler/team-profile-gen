function renderHTML(renderManager, renderEngineer, renderIntern) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Your Team Profiles</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <div class="header">
          <h1>My Team</h1>
      </div>
      ${renderManager}
      ${renderEngineer}
      ${renderIntern}
      <script src="index.js"></script>
    </body>
  </html>`
}

module.exports = renderHTML(); 