const jwt = require('jsonwebtoken')


const userAuth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).json({ msg: "invalid Credentials,please login" })
  }
  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    req.user = { userId: payload.userId, name: payload.name, accountType: payload.accountType }
    if (payload.accountType !== "User") {
      return res.status(401).json({ msg: "wrong details" })
    }
    next()
  } catch (error) {
    res.status(401).json({ msg: "wrong details" })
  }
}

module.exports = userAuth