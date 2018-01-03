import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticlesList from '../../pages/ArticlesList'
import { getArticles, getArticle } from '../../actions/articles'

const mapStateToProps = (state, props) => ({ ...state })

const mapDispatchToProps = dispatch => ({
    onGetArticlesClick: typeId => dispatch(getArticles(typeId)),
    onGetArticleClick: articleId => dispatch(getArticle(articleId))
})  

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList)
