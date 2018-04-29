import React from 'react'
import 'moment-timezone'
import * as messages from '../../constants/ui.labels'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class Article extends React.Component {

  render() {
    const { article, articlesType } = this.props.articles

    const renderArticle = article => {
        return (
            <article id={article._id} class="post type-post article-post status-publish format-standard hentry">
                <header class="entry-header">
                    <h2 class="entry-title">{article.name}</h2>
                </header> 
                <div class="entry-content">
                    <div class="post-section" id="description">
                        <p>{article.description}</p>
                    </div>
                    <div class="post-section" id="manifestations">
                        <h3>{messages.MANIFESTATIONS}</h3>
                        <p>{article.manifestations}</p>
                    </div>
                    <div class="post-section" id="causes">
                        <h3>{messages.CAUSES}</h3>
                        <p>{article.causes}</p>
                    </div>
                    <div class="post-section" id="diagnostic">
                        <h3>{messages.DIAGNOSTIC}</h3>
                        <p>{article.diagnostic}</p>
                    </div>
                    <div class="post-section" id="tratament">
                        <h3>{messages.TRATAMENT}</h3>
                        <p>{article.tratament}</p>
                    </div>
                </div>
            </article>
        )
    }

    return (
      <React.Fragment>
        <Header articlesType={articlesType} 
                onGetArticlesClick={this.props.onGetArticlesClick} 
                onSearchSubmit={this.props.onSearchSubmit} />
        <div id="page" class="hfeed site">
            <div id="content" class="site-content">
                <div class="container content-wrapper">
                    <div id="primary" class="content-area">
                        <div id="ob-grid" class="grid-layout grid-article">
                            <main id="main" class="site-main" role="main">
                                {renderArticle(article)}
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

Article.propTypes = {}

export default Article
