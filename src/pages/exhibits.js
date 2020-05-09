import React, { useLayoutEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import style from './style.module.scss'

const exhibitsPage = () => {
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      // const jQuery = require('jquery')
      // window.jQuery = window.$ = jQuery
      // require('jquery-mousewheel')
      // $(function() {
      //   $("#scroller").mousewheel(function(event, delta) {
      //     // console.log('Document: ' + $(document).scrollTop())
      //     // console.log('Offset: ' + Math.floor($("#scroller").offset().top))
      //     if((this.scrollLeft < 1 && delta == 1) || (Math.floor($(document).scrollTop()) < Math.floor($("#scroller").offset().top))) {
            
      //     } else {
      //       this.scrollLeft -= (delta * 50)
      //       event.preventDefault()
      //     }
      //   })
      // })
    }
  }, [])

  const page = useStaticQuery(
    graphql`
    query exhibitsPageQuery {
      contentfulPage(title: {eq: "Exhibits"}) {
        title
        metaDescription {
          metaDescription
        }
        metaTitle {
          metaTitle
        }
        content {
          ... on ContentfulSection {
            title
            content {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }`
  )

  return (
    <Layout>
      <SEO title="Current Exhibitions" description="" />
      <div className={style.container}>
        <div className={style.container_content}>
          <h2 className={style.header}>Current Exhibitions</h2>
          {
            page.contentfulPage.content ? page.contentfulPage.content.map(column => (
              <div className={style.paragraph} dangerouslySetInnerHTML={{
                  __html: column.content.childMarkdownRemark.html
                }}
              >
              </div>
            )) : (
              <div className={style.paragraph} style={{textAlign: 'center'}}>
                <strong>There are no current exhibitions.</strong>
              </div>
            )
          }
        </div>
      </div>
    </Layout>
  )
}

export default exhibitsPage

