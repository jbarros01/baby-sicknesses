import React from 'react'
import { Navbar } from 'react-bootstrap';
import * as messages from '../../constants/ui.labels'

class Nav extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      toggle: "sidebar-toggle",
      icon: "menu",
      widget: "widget-area"
    }
    this.handlerSidebar = this.handlerSidebar.bind(this)
    this.handlerKeyPress = this.handlerKeyPress.bind(this)
    this.renderSidebarOptions = this.renderSidebarOptions.bind(this)
  }

  handlerSidebar() {
    this.setState({
      toggle: this.state.toggle === "sidebar-toggle" ? "sidebar-toggled" : "sidebar-toggle",
      icon: this.state.icon === "menu" ? "close" : "menu",
      widget: this.state.widget === "widget-area" ? "widget-area widget-area-visible" : "widget-area"
    })
  }

  renderSidebarOptions(articlesType, onGetArticlesClick, onAboutClick) {
    const articleOptions = articlesType.map(type => {
        return (
          <li class="page_item">
            <a href="#" role="menuitem" onClick={onGetArticlesClick.bind(null, type._id)}>{type.name}</a>
          </li>
        )
      })
    
    const aboutOption = <li class="page_item">
                          <a href="#" role="menuitem" onClick={onAboutClick.bind(null)}>{messages.ABOUT}</a>
                        </li>

    articleOptions.push(aboutOption)

    return articleOptions
  }

  handlerKeyPress(event) {
    if(event.key === 'Enter'){
      this.props.onSearchSubmit(event.target.value)
    }
  }

  render() {
    const { articlesType, onGetArticlesClick, onAboutClick } = this.props

    return (
      <React.Fragment>
          <Navbar inverse fixedTop>
            <Navbar.Header>
              <div className={this.state.toggle} onClick={this.handlerSidebar}>
                <i class="material-icons">{this.state.icon}</i>
              </div>
              <div className="search-input">
                <span><i class="material-icons">search</i></span>
                <span><input type="text" placeholder={messages.SEARCH_ARTICLES} onKeyDown={this.handlerKeyPress} /></span>
              </div>
            </Navbar.Header>
          </Navbar>
          <div id="secondary" className={this.state.widget} role="complementary">
            <nav id="site-navigation" class="main-navigation" role="navigation">
              <div id="primary-menu" class="menu">
                <ul>
                  {this.renderSidebarOptions(articlesType, onGetArticlesClick, onAboutClick)}
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
                    {this.renderSidebarOptions(articlesType, onGetArticlesClick, onAboutClick)}
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
