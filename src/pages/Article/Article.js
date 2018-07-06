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
                        <p dangerouslySetInnerHTML={ { __html: article.description } }></p>
                    </div>
                    <div class="post-section" id="characteristics">
                        <h3>{messages.CHARACTERISTICS}</h3>
                        <p dangerouslySetInnerHTML={ { __html: article.characteristics } }></p>
                    </div>
                    {
                        article.complications &&
                        <div class="post-section" id="complications">
                            <h3>{messages.COMPLICATIONS}</h3>
                            <p dangerouslySetInnerHTML={ { __html: article.complications } }></p>
                        </div>
                    }
                    <div class="post-section" id="causes">
                        <h3>{messages.CAUSES}</h3>
                        <p dangerouslySetInnerHTML={ { __html: article.causes } }></p>
                    </div>
                    {
                        article.transmission &&
                        <div class="post-section" id="transmission">
                            <h3>{messages.TRANSMISSION}</h3>
                            <p dangerouslySetInnerHTML={ { __html: article.transmission } }></p>
                        </div>
                    }
                    {
                        article.risks &&
                        <div class="post-section" id="risks">
                            <h3>{messages.RISKS}</h3>
                            <p dangerouslySetInnerHTML={ { __html: article.risks } }></p>
                        </div>
                    }
                    {
                        article.prevention &&
                        <div class="post-section" id="prevention">
                            <h3>{messages.PREVENTION}</h3>
                            <p dangerouslySetInnerHTML={ { __html: article.prevention } }></p>
                        </div>
                    }
                    <div class="post-section" id="diagnostic">
                        <h3>{messages.DIAGNOSTIC}</h3>
                        <p dangerouslySetInnerHTML={ { __html: article.diagnostic } }></p>
                    </div>
                    <div class="post-section" id="tratament">
                        <h3>{messages.TRATAMENT}</h3>
                        <p dangerouslySetInnerHTML={ { __html: article.tratament } }></p>
                    </div>
                    {
                        article.incidence &&
                        <div class="post-section" id="incidence">
                            <h3>{messages.INCIDENCE}</h3>
                            <p dangerouslySetInnerHTML={ { __html: article.incidence } }></p>
                        </div>
                    }
                    {
                        article.prognostic &&
                        <div class="post-section" id="prognostic">
                            <h3>{messages.PROGNOSTIC}</h3>
                            <p dangerouslySetInnerHTML={ { __html: article.prognostic } }></p>
                        </div>
                    }
                    {
                        article.curiosities &&
                        <div class="post-section" id="curiosities">
                            <h3>{messages.CURIOSITIES}</h3>
                            <p dangerouslySetInnerHTML={ { __html: article.curiosities } }></p>
                        </div>
                    }
                </div>
            </article>
        )
    }

    return (
      <React.Fragment>
        <div id="page" class="hfeed site">
            <Header articlesType={articlesType} 
                onGetArticlesClick={this.props.onGetArticlesClick} 
                onAboutClick={this.props.onAboutClick}
                onWebgraphyClick={this.props.onWebgraphyClick}
                onSearchSubmit={this.props.onSearchSubmit} 
                hasReturn={true} />
            <div id="content" class="site-content">
                <div class="container content-wrapper container-article">
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
        <Footer onAboutClick={this.props.onAboutClick} />
      </React.Fragment>
    )
  }
}

Article.propTypes = {}

export default Article
