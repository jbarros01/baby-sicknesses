import { connect } from 'react-redux'
import ArticlesList from '../../pages/ArticlesList'
import { getArticles, getArticle, getArticleSearch, getAbout, getWebgraphy } from '../../actions/articles'

const mapStateToProps = (state, props) => ({ ...state })

const mapDispatchToProps = dispatch => ({
    onGetArticlesClick: typeId => dispatch(getArticles(typeId)),
    onAboutClick: () => dispatch(getAbout()),
    onWebgraphyClick: () => dispatch(getWebgraphy()),
    onGetArticleClick: articleId => dispatch(getArticle(articleId)),
    onSearchSubmit: article => dispatch(getArticleSearch(article))
})  

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList)
