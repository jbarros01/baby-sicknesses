import * as actionTypes from '../constants/action.types'
import actionCreator from './action.creator'

export const init = actionCreator(actionTypes.INIT)

export * from './articles'
