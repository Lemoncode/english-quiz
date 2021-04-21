const express = require('express');
const path = require('path');
const { redirectHttspMiddleware } = require('./redirect-https.middleware');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(redirectHttspMiddleware);
}

const staticFilesPath = path.resolve(__dirname, process.env.STATIC_FILES_PATH);
app.use('/', express.static(staticFilesPath));

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
