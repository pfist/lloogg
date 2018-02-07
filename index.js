'use strict'

const chalk = require('chalk')
const { DateTime } = require('luxon')

class Lloogg {
  constructor (options) {
    this.options = Object.assign({
      showTimestamp: false,
      timestampLocale: 'en-US'
    }, options)

    this.timestamp = `(${DateTime.local().setLocale(this.options.timestampLocale).toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)})`
    this.prefix = level => {
      if (this.options.showTimestamp) {
        return `${level} ${this.timestamp}`
      } else {
        return `(${level})`
      }
    }
  }

  info () {
    let messages = Array.from(arguments)

    for (let message of messages) {
      console.info(chalk.blue(this.prefix('INFO')), message)
    }
  }

  warn () {
    let messages = Array.from(arguments)

    for (let message of messages) {
      console.info(chalk.yellow(this.prefix('WARN')), message)
    }
  }

  error () {
    let messages = Array.from(arguments)

    for (let message of messages) {
      console.info(chalk.red(this.prefix('ERR!')), message)
    }
  }

  success () {
    let messages = Array.from(arguments)

    for (let message of messages) {
      console.info(chalk.green(this.prefix('YAY!')), message)
    }
  }
}

module.exports = Lloogg
