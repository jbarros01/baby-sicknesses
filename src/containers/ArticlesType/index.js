import { connect } from 'react-redux'
import ArticlesType from '../../pages/ArticlesType'
import { getArticles, getArticleSearch, getAbout } from '../../actions/articles'

const mapStateToProps = (state, props) => ({ ...state.articles })

const mapDispatchToProps = dispatch => ({
  onGetArticlesClick: typeId => dispatch(getArticles(typeId)),
  onAboutClick: () => dispatch(getAbout()),
  onSearchSubmit: article => dispatch(getArticleSearch(article))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesType)
