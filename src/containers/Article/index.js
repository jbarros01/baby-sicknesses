import { connect } from 'react-redux'
import Article from '../../pages/Article'
import { getArticles, getArticleSearch, getAbout } from '../../actions/articles'

const mapStateToProps = (state, props) => ({ ...state })

const mapDispatchToProps = dispatch => ({
    onGetArticlesClick: typeId => dispatch(getArticles(typeId)),
    onAboutClick: () => dispatch(getAbout()),
    onSearchSubmit: article => dispatch(getArticleSearch(article))
})  

export default connect(mapStateToProps, mapDispatchToProps)(Article)