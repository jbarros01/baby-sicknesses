import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../../pages/App'

export const mapStateToProps = ({ reducer }) => ({})

export const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer
