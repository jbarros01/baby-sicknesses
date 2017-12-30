import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Article from '../../pages/Article'

const mapStateToProps = (state, props) => ({ ...state })

export default connect(mapStateToProps, {})(Article)