import React from 'react'
import { Link } from 'gatsby'

import style from './header.module.scss'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.links = [
      {
        name: "Gallery",
        slug: "/"
      },
      {
        name: "Videos",
        slug: "/videos"
      },
      {
        name: "CV",
        slug: "/cv"
      },
      {
        name: "Bio",
        slug: "/bio"
      },
      {
        name: "Press",
        slug: "/press"
      },
      {
        name: "Events",
        slug: "/events"
      },
      {
        name: "Contact",
        slug: "/contact"
      },
    ]
    
    this.state = { visible: false }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }
  toggleMenu(e) {
    e && e.preventDefault()
    this.setState(state => ({
        visible: !state.visible
    }))
  }
  openMenu() {
    this.setState({
        visible: true
    })
  }
  closeMenu() {
    this.setState({
        visible: false
    })
  }

  render() {
    return (
      <nav role="navigation" aria-label="Main" itemScope itemType="http://www.schema.org/SiteNavigationElement">
        <ul id="nav" className={`${style.navigation}${this.state.visible ? ' active' : ''}`}>
          <li className={style.mobileClose} itemProp="name" onClick={this.closeMenu}>
            <svg className="icon">
              <use xlinkHref="#icon-close" />
            </svg>
          </li>
          {
            this.links.map((link, index) =>
              <li className={style.navigationItem} itemProp="name" key={index}>
                <Link to={link.slug} itemProp="url" onClick={this.closeMenu}>{link.name}</Link>
              </li>
            )
          }
        </ul>
        <button className={style.mobileButton} onClick={this.toggleMenu}>
          <svg className="icon">
            <use xlinkHref="#icon-menu" />
          </svg>
        </button>
      </nav>
    )
  }
}

export default Navigation