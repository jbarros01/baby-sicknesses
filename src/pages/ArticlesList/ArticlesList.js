import React from 'react'
import { func, string, shape } from 'prop-types'
import moment from 'moment'
import 'moment-timezone'
import * as messages from '../../constants/ui.labels'
import * as ui from '../../constants/ui.constants'
import * as states from '../../constants/state.types'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Button } from 'react-bootstrap'

class ArticlesList extends React.Component {

  render() {
    const { articlesList, articlesType } = this.props.articles

    const renderArticlesList = articlesList => {
      return articlesList.map(article => {
        return (
          <article id={article._id} class="post type-post status-publish format-standard hentry category-uncategorized tag-boat tag-lake">
            <div class="post-inner no-thumb">
                <header class="entry-header">
                    <h2 class="entry-title">
                        <a href="#" rel="bookmark">{article.name}</a>
                    </h2>
                </header>
                <div class="entry-content">
                  <p>{article.description}</p>
                </div>
            </div>
            <Button id="read-more-btn" onClick={this.props.onGetArticleClick.bind(null, article._id)}>
              <div class="read-more">{messages.SEE_ARTICLE}</div>
            </Button>
          </article>
        )
      })
    }

    return (
      <React.Fragment>
        <Header articlesType={articlesType} onGetArticlesClick={this.props.onGetArticlesClick} />
        <div id="page" class="hfeed site">
          <div id="content" class="site-content">
            <div class="container content-wrapper">
              <div id="primary" class="content-area">
                <div id="ob-grid" class="grid-layout">
                  <main id="main" class="site-main" role="main">
                    {renderArticlesList(articlesList)}
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

ArticlesList.propTypes = {
  onGetArticleClick: func.isRequired
}

export default ArticlesList