import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import SEO from '../components/seo'

import style from './style.module.scss'

class RootIndex extends React.Component {
  render() {
    const person = get(this.props, 'data.contentfulPerson')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Layout location={this.props.location} >
          <SEO title="Biography" description="Shaun Leonardo is a Brooklyn-based artist from Queens, New York City. He received his MFA from the San Francisco Art Institute." />
          <div className={style.container}>
            <div className={style.container_content}>
              <h2 className={style.header}>Biography</h2>
              <div className={style.paragraph} dangerouslySetInnerHTML={{
                  __html: person.bio.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query BioQuery {
    contentfulPerson(name: { eq: "Shaun Leonardo" }) {
      bio {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
