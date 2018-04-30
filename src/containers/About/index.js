import { connect } from 'react-redux'
import About from '../../pages/About'
import { getArticles, getArticleSearch, getAbout } from '../../actions/articles'

const mapStateToProps = (state, props) => ({ ...state })

const mapDispatchToProps = dispatch => ({
    onGetArticlesClick: typeId => dispatch(getArticles(typeId)),
    onAboutClick: () => dispatch(getAbout()),
    onSearchSubmit: article => dispatch(getArticleSearch(article))
})  

export default connect(mapStateToProps, mapDispatchToProps)(About)