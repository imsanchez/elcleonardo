import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

import style from './style.module.scss'

class RootIndex extends React.Component {
  render() {
    const person = get(this.props, 'data.contentfulPerson')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Layout location={this.props.location} >
          <SEO title="Contact" description="Connect via Social Media such as Facebook and Instagram." />
          <div className={style.container}>
            <div className={style.container_image}>
              <Img className={style.portrait} alt={person.name} title={person.name} fluid={person.image.fluid} />
              <div className={style.caption}>Portrait by Vincent Tullo, 2018.</div>
            </div>
            
            <div className={style.container_content}>
              <a href="https://www.facebook.com/elcleonardo">
                <svg>
                  <use xlinkHref="#icon-facebook" />
                </svg>
              </a>
              <a href="https://www.instagram.com/elcleonardo/">
                <svg>
                  <use xlinkHref="#icon-instagram" />
                </svg>
              </a>
            </div>
          </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query ContactQuery {
    contentfulPerson(name: { eq: "Shaun Leonardo" }) {
      name
      title
      company
      bio {
        childMarkdownRemark {
          html
        }
      }
      email
      phone
      facebook
      instagram
      twitter
      image {
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
