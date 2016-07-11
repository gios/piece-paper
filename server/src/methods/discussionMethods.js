'use strict'

const crypto = require('crypto')
const tracer = require('tracer').colorConsole()

exports.cryptoPassword = function(password) {
  const cipher = crypto.createCipher('aes192', 'salt')
  cipher.update(password)
  try {
    cipher.final('hex')
  } catch (error) {
    tracer.error(error)
    return
  }
  return cipher.final('hex')
}

exports.encryptoPassword = function(hash) {
  const decipher = crypto.createDecipher('aes192', 'salt')
  decipher.update(hash, 'hex')
  try {
    decipher.final('utf8')
  } catch (error) {
    tracer.error(error)
    return
  }
  return decipher.final('utf8')
}
