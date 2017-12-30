import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticlesType from '../../pages/ArticlesType'
import { getArticles } from '../../actions/articles'

const mapStateToProps = (state, props) => ({ ...state.articles })

const mapDispatchToProps = dispatch => ({
  onGetArticlesClick: typeId => dispatch(getArticles(typeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesType)
