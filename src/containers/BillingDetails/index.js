import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BillingDetails from '../../pages/BillingDetails'
import { editBillingDetails } from '../../actions/billingDetails'

const mapStateToProps = (state, props) => ({ ...state.billingDetails })

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {    
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(BillingDetails)
