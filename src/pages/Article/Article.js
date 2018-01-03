import React from 'react'
import { func, string, shape } from 'prop-types'
import moment from 'moment'
import 'moment-timezone'
import * as messages from '../../constants/ui.labels'
import * as ui from '../../constants/ui.constants'
import * as states from '../../constants/state.types'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class Article extends React.Component {

  render() {
    const { article, articlesType } = this.props.articles

    const renderFakeArticle = () => {
        return (
            <article id="fake" class="post type-post article-post status-publish format-standard hentry">
                <header class="entry-header">
                    <h1 class="entry-title">Title</h1>
                </header> 
                <div class="entry-content">Description</div>
            </article>
        )
    }

    return (
      <React.Fragment>
        <Header articlesType={articlesType} onGetArticlesClick={this.props.onGetArticlesClick} />
        <div id="page" class="hfeed site">
            <div id="content" class="site-content">
                <div class="container content-wrapper">
                    <div id="primary" class="content-area">
                        <main id="main" class="site-main" role="main">
                            {renderFakeArticle()}
                        </main>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

Article.propTypes = {}

export default Article
