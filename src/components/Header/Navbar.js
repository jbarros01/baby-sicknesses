import React from 'react'
import { Grid, Navbar } from 'react-bootstrap';

class Nav extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      toggle: "sidebar-toggle",
      icon: "menu",
      widget: "widget-area"
    }
    this.handlerSidebar = this.handlerSidebar.bind(this)
    this.renderSidebarOptions = this.renderSidebarOptions.bind(this)
  }

  handlerSidebar() {
    this.setState({
      toggle: this.state.toggle === "sidebar-toggle" ? "sidebar-toggled" : "sidebar-toggle",
      icon: this.state.icon === "menu" ? "close" : "menu",
      widget: this.state.widget === "widget-area" ? "widget-area widget-area-visible" : "widget-area"
    })
  }

  renderSidebarOptions(articlesType, onGetArticlesClick) {
    return articlesType.map(type => {
      return (
        <li class="page_item">
          <a href="#" role="menuitem" onClick={onGetArticlesClick.bind(null, type._id)}>{type.name}</a>
        </li>
      )
    })
  }

  render() {
    const { articlesType, onGetArticlesClick } = this.props

    return (
      <React.Fragment>
          <Navbar inverse fixedTop>
            <Grid>
              <Navbar.Header>
                <div className={this.state.toggle} onClick={this.handlerSidebar}>
                  <i class="material-icons">{this.state.icon}</i>
                </div>
              </Navbar.Header>
            </Grid>
          </Navbar>
          <div id="secondary" className={this.state.widget} role="complementary">
            <nav id="site-navigation" class="main-navigation" role="navigation">
              <div id="primary-menu" class="menu">
                <ul>
                  {this.renderSidebarOptions(articlesType, onGetArticlesClick)}
                </ul>
              </div>
            </nav>
            <nav class="sidebar-nav">
              <div class="slicknav_menu">
                <a href="#" aria-haspopup="true" tabindex="0" class="slicknav_btn slicknav_collapsed" style={{ outline: 'none' }}>
                  <span class="slicknav_menutxt"></span>
                  <span class="slicknav_icon slicknav_no-text">
                    <span class="slicknav_icon-bar"></span>
                    <span class="slicknav_icon-bar"></span>
                    <span class="slicknav_icon-bar"></span>
                  </span>
                </a>
                <div class="slicknav_nav slicknav_hidden" style={{ display: 'none' }} role="menu">
                  <ul>
                    {this.renderSidebarOptions(articlesType, onGetArticlesClick)}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
      </React.Fragment>
    )
  }
}

export default Nav
