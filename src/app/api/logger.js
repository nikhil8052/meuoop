const winston = require('winston');

// Configure the logger
const logger = winston.createLogger({
  level: 'info',  // Set the minimum log level to 'info'
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),  // Format log with timestamp
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),  // Log to console
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),  // Log errors to a file
    new winston.transports.File({ filename: 'logs/combined.log' })  // Log all messages to a file
  ],
});

module.exports = logger;
