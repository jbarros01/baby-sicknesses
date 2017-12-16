import React from 'react'
import { func, string, shape } from 'prop-types'
import moment from 'moment'
import 'moment-timezone'
import * as messages from '../../constants/ui.labels'
import * as ui from '../../constants/ui.constants'
import * as states from '../../constants/state.types'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ArticleType from './ArticleType'

class BillingDetails extends React.Component {

  render() {
    const details = this.props

    const renderFakeArticles = () => {
      let articles = []
      for (let i = 0; i < 3; i++) {
        articles.push(
          <ArticleType/>
        )
      }

      return articles
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
                    {renderFakeArticles()}
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

const detailsType = shape({
  first_name: string
})

BillingDetails.propTypes = {
  details: detailsType
}

export default BillingDetails
