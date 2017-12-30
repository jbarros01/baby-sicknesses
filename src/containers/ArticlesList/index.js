import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticlesList from '../../pages/ArticlesList'
import { getArticle } from '../../actions/articles'

const mapStateToProps = (state, props) => ({ ...state })

const mapDispatchToProps = dispatch => ({
    onGetArticleClick: articleId => dispatch(getArticle(articleId))
})  

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList)
