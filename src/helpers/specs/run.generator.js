import { delay } from 'redux-saga'
import { call } from 'redux-saga/effects'
import { isEqual } from 'lodash'

export const animationDelay = (duration = 2000) => call(delay, duration)

export function runGeneratorWith(generator, mappings = []) {
  if (generator.done) return []

  let output = generator.next()
  let result = [output.value]

  const compare = output => mapping => isEqual(mapping.key, output.value)

  while (!output.done) {
    const param = mappings.find(compare(output))

    if (!param) {
      output = generator.next()
    } else if (param.error) {
      output = generator.throw(param.error)
    } else {
      output = generator.next(param.value)
    }

    result.push(output.value)
  }

  return result
}
