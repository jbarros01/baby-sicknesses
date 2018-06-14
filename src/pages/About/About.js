import React from 'react'
import 'moment-timezone'
import * as messages from '../../constants/ui.labels'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class About extends React.Component {

  render() {
    const { about, articlesType } = this.props.articles

    const renderAboutContent = about => {
        return (
            <article id="about-article" class="post type-post article-post status-publish format-standard hentry">
                <header class="entry-header">
                    <h2 class="entry-title">{messages.ABOUT}</h2>
                </header> 
                <div class="entry-content">
                    <div class="post-section" id="about">
                        <p>{about}</p>
                    </div>
                </div>
            </article>
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
                        <div id="ob-grid" class="grid-layout grid-article">
                            <main id="main" class="site-main" role="main">
                                {renderAboutContent(about)}
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

About.propTypes = {}

export default About
