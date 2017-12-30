import React from 'react'
import { func, string, shape, arrayOf } from 'prop-types'
import moment from 'moment'
import 'moment-timezone'
import * as messages from '../../constants/ui.labels'
import * as ui from '../../constants/ui.constants'
import * as states from '../../constants/state.types'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Button } from 'react-bootstrap'

class ArticlesType extends React.Component {

  render() {
    const { articlesType } = this.props

    const renderArticlesType = articlesType => {
      return articlesType.map(type => {
        return (
          <article id={type._id} class="post type-post status-publish format-standard hentry category-uncategorized tag-boat tag-lake">
            <div class="post-inner no-thumb">
                <header class="entry-header">
                    <h2 class="entry-title">
                        <a href="#" rel="bookmark">{type.name}</a>
                    </h2>
                </header>
            </div>
            <Button id="read-more-btn" onClick={this.props.onGetArticlesClick.bind(null, type._id)}>
              <div class="read-more">{messages.SEE_ARTICLES}</div>
            </Button>					
          </article>
        )
      })
    }

    return (
      <React.Fragment>
        <Header />
        <div id="page" class="hfeed site">
          <div id="content" class="site-content">
            <div class="container content-wrapper">
              <div id="primary" class="content-area">
                <div id="ob-grid" class="grid-layout">
                  <main id="main" class="site-main" role="main">
                    {renderArticlesType(articlesType)}
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

ArticlesType.propTypes = {
  onGetArticlesClick: func.isRequired
}

export default ArticlesType
