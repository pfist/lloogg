'use strict'

// Import dependencies
const chalk = require('chalk')

module.exports = {
  info () {
    let messages = Array.from(arguments)

    for (let message of messages) {
      console.log(chalk.blue('-'), message)
    }
  },
  warning () {
    let messages = Array.from(arguments)

    for (let message of messages) {
      console.log(chalk.yellow('!'), message)
    }
  },
  error () {
    let messages = Array.from(arguments)

    for (let message of messages) {
      console.log(chalk.red('✖'), message)
    }
  },
  success () {
    let messages = Array.from(arguments)

    for (let message of messages) {
      console.log(chalk.green('✔'), message)
    }
  }
}
