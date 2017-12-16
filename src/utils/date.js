import * as values from '../constants/filters'
import moment from 'moment'

export default function mapWhenToDate(when) {
  switch (when) {
    case values.LAST_WEEK:
      return moment()
        .utc()
        .subtract(1, 'weeks')
        .toISOString()
    case values.LAST_MONTH:
      return moment()
        .utc()
        .subtract(1, 'months')
        .toISOString()
    case values.LAST_QUARTER:
      return moment()
        .utc()
        .subtract(3, 'months')
        .toISOString()
    case values.LAST_SEMESTER:
      return moment()
        .utc()
        .subtract(6, 'months')
        .toISOString()
    case values.CURRENT_YEAR:
      return moment()
        .utc()
        .startOf('year')
        .toISOString()
    case values.LAST_YEAR:
      return moment()
        .utc()
        .subtract(1, 'years')
        .toISOString()
    default:
      return null
  }
}
