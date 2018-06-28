import React from 'react'
import 'moment-timezone'
import * as messages from '../../constants/ui.labels'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class Webgraphy extends React.Component {

  render() {
    const { articles, articlesType } = this.props.articles

    const renderWebgraphyArticle = articles => {
        return articles.map(article => {
            const webgraphy = Array.from(article.webgraphy)

            return (
                <React.Fragment>
                    <div class="entry-content">
                        <div id="name">
                            <b>
                                <p dangerouslySetInnerHTML={ { __html: article.name } }></p>
                            </b>
                        </div>
                        <div id="webgraphy">
                            {
                                webgraphy.map(web => 
                                    <p>
                                        <a href={web.link}>{web.link}</a> {web.consulted}
                                    </p>
                                )
                            }
                        </div>
                    </div>
                </React.Fragment>
            )
        })
    }

    const renderWebgraphyContent = articles => {
        return (
            <article id="articles-web" class="post type-post article-post status-publish format-standard hentry">
                <header class="entry-header">
                    <h2 class="entry-title">{messages.WEBGRAPHY}</h2>
                </header> 
                {renderWebgraphyArticle(articles)}
            </article>
        )
    }

    return (
      <React.Fragment>
        <Header articlesType={articlesType}
                articles={articles}
                onGetArticlesClick={this.props.onGetArticlesClick}
                onAboutClick={this.props.onAboutClick}
                onWebgraphyClick={this.props.onWebgraphyClick}
                onSearchSubmit={this.props.onSearchSubmit}
                hasReturn={true} />
        <div id="page" class="hfeed site">
            <div id="content" class="site-content">
                <div class="container content-wrapper">
                    <div id="primary" class="content-area">
                        <div id="ob-grid" class="grid-layout grid-article">
                            <main id="main" class="site-main" role="main">
                                {renderWebgraphyContent(articles)}
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

Webgraphy.propTypes = {}

export default Webgraphy
