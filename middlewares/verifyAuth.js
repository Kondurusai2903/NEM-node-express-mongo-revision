const veriryAuth = (req, res, next) => {
  console.log(req.headers, '====>>>>>>>')
  if (req.headers.authorization !== process.env.password) {
    return res.sendStatus(403)
  }
  next()
}
module.exports = veriryAuth
