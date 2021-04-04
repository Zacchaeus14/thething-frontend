module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/thething-frontend-build/'
    : '/'
}
