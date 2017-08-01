module.exports = (code, message) => (req, res, next) => {
  res.status(code).json({
    message
  })
}
