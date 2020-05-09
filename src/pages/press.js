import React, { useLayoutEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import SEO from '../components/seo'

import style from './style.module.scss'

const pressPage = () => {
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
    query pressPageQuery {
      contentfulPage(title: {eq: "Publications"}) {
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

  console.log(page);

  return (
    <Layout>
      <SEO title="Publications" description="Explore all of the many publications featuring Shaun Leonardo and his artwork." />
      <div className={style.container}>
        <h2 className={style.header}>Publications</h2>
      </div>
      <div className={style.gutters}>
        <div id="scroller" className={style.wrapper}>
          {
            page.contentfulPage.content.map(column => (
              <div className={style.wrapper_column}>
                <div className={style.wrapper_column__content}>
                    <div className={style.tab} dangerouslySetInnerHTML={{
                      __html: column.content.childMarkdownRemark.html
                    }}></div>
                  </div>
              </div>
            ))
          }
        </div> 
      </div>
    </Layout>
  )
}

export default pressPage