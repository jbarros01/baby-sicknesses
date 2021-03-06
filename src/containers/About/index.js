import { connect } from 'react-redux'
import About from '../../pages/About'
import { getArticles, getArticleSearch, getAbout, getWebgraphy } from '../../actions/articles'

const mapStateToProps = (state, props) => ({ ...state })

const mapDispatchToProps = dispatch => ({
    onGetArticlesClick: typeId => dispatch(getArticles(typeId)),
    onAboutClick: () => dispatch(getAbout()),
    onWebgraphyClick: () => dispatch(getWebgraphy()),
    onSearchSubmit: article => dispatch(getArticleSearch(article))
})  

export default connect(mapStateToProps, mapDispatchToProps)(About)