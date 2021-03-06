import { connect } from 'react-redux'
import ArticlesType from '../../pages/ArticlesType'
import { getArticles, getArticleSearch, getAbout, getWebgraphy } from '../../actions/articles'

const mapStateToProps = (state, props) => ({ ...state.articles })

const mapDispatchToProps = dispatch => ({
    onGetArticlesClick: typeId => dispatch(getArticles(typeId)),
    onAboutClick: () => dispatch(getAbout()),
    onWebgraphyClick: () => dispatch(getWebgraphy()),
    onSearchSubmit: article => dispatch(getArticleSearch(article))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesType)
