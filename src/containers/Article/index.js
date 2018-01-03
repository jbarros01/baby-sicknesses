import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Article from '../../pages/Article'
import { getArticles } from '../../actions/articles'

const mapStateToProps = (state, props) => ({ ...state })

const mapDispatchToProps = dispatch => ({
    onGetArticlesClick: typeId => dispatch(getArticles(typeId))
})  

export default connect(mapStateToProps, mapDispatchToProps)(Article)