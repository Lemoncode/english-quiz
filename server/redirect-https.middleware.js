const httpsProtocol = 'https';
const protocol = 'x-forwarded-proto'
const host = 'host'

const buildHttpsUrl = (req) => `${httpsProtocol}://${req.header(host)}${req.url}`

const redirectHttpsMiddleware = (req, res, next) => {
  if(req.header(protocol) !== httpsProtocol) {
    res.redirect(301, buildHttpsUrl(req));
  } else {
    next();
  }
}

module.exports = {
  redirectHttpsMiddleware
}
