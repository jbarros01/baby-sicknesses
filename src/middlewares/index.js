import loggerMiddleware from './logger'
import routingMiddleware from './routing'
import devAuthentication from './dev.authentication'

export default [loggerMiddleware, routingMiddleware, devAuthentication]
