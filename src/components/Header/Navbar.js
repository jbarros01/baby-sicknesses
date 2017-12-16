import React from 'react'
import { Grid, Navbar } from 'react-bootstrap';

const Nav = () => {

  return (
    <React.Fragment>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <div className="sidebar-toggle">
                <i class="material-icons">menu</i>
              </div>
               <div class="top-bar">
                <div class="header-search">
                  <form role="search" method="get" class="search-form" action="https://wp-themes.com/">
                    <label>
                      <span class="screen-reader-text">Search for:</span>
                      <input type="search" class="search-field" placeholder="Search …" value="" name="s" />
                    </label>
                    <input type="submit" class="search-submit" value="Search" />
                  </form>     
                </div>
              </div>
            </Navbar.Header>
          </Grid>
        </Navbar>
        <div id="secondary" className="widget-area" role="complementary">
          <nav id="site-navigation" class="main-navigation" role="navigation">
            <div id="primary-menu" class="menu">
              <ul>
                <li class="page_item page-item-2"><a href="https://wp-themes.com/?page_id=2">About</a></li>
                <li class="page_item page-item-46 page_item_has_children">
                  <a href="https://wp-themes.com/?page_id=46">Parent Page</a>
                  <ul class="children">
                    <li class="page_item page-item-49"><a href="https://wp-themes.com/?page_id=49">Sub-page</a></li>
                  </ul>
                </li>
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
                  <li class="page_item page-item-2">
                    <a href="https://wp-themes.com/?page_id=2" role="menuitem">About</a>
                  </li>
                  <li class="page_item page-item-46 page_item_has_children slicknav_collapsed slicknav_parent">
                    <a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style={{ outline: 'none' }}>
                      <a href="https://wp-themes.com/?page_id=46">Parent Page</a>
                    </a>
                    <ul class="children slicknav_hidden" role="menu" style={{ display: 'none' }}>
                      <li class="page_item page-item-49">
                        <a href="https://wp-themes.com/?page_id=49" role="menuitem" tabindex="-1">Sub-page</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    </React.Fragment>
  )
}

export default Nav
