import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../../components/App'

export const mapStateToProps = ({ reducer }) => ({})

export const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer
