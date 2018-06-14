import React from 'react'
import { func } from 'prop-types'
import 'moment-timezone'
import * as messages from '../../constants/ui.labels'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Button } from 'react-bootstrap'

class ArticlesList extends React.Component {

  render() {
    const { articlesList, articlesType, } = this.props.articles

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

    const renderNotFoundElement = () => {
      return (
        <div class="empty-articles">
          <img alt="sick-emoji" src="/img/sick-emoji.png"/>
          <div>{messages.NONE_ARTICLE}</div>
        </div>
      )
    }

    return (
      <React.Fragment>
        <Header articlesType={articlesType} 
                onGetArticlesClick={this.props.onGetArticlesClick} 
                onAboutClick={this.props.onAboutClick} 
                onWebgraphyClick={this.props.onWebgraphyClick}
                onSearchSubmit={this.props.onSearchSubmit} 
                hasReturn={true} />
        <div id="page" class="hfeed site">
          <div id="content" class="site-content">
            <div class="container content-wrapper">
              <div id="primary" class="content-area">
                <div id="ob-grid" class="grid-layout">
                  <main id="main" class="site-main" role="main">
                    { 
                      articlesList.length !== 0 
                      ? renderArticlesList(articlesList) 
                      : renderNotFoundElement()
                    }
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer onAboutClick={this.props.onAboutClick} />
      </React.Fragment>
    )
  }
}

ArticlesList.propTypes = {
  onGetArticleClick: func.isRequired
}

export default ArticlesList