import React, { useLayoutEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import SEO from '../components/seo'

import style from './style.module.scss'

const cvPage = () => {
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
    query cvPageQuery {
      contentfulPage(title: {eq: "Curriculum Vitae"}) {
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
      <SEO title="Curriculum Vitae" description="Education, Awards, Select Solo Exhibitions, Select Group Exhibitions and more. Read into the history of Shaun's artwork." />
      <div className={style.container}>
        <h2 className={style.header}>Curriculum Vitae</h2>
      </div>
      <div className={style.gutters}>
        <div id="scroller" className={style.wrapper}>
          {
            page.contentfulPage.content.map(column => (
              <div className={style.wrapper_column}>
                <div className={style.wrapper_column__content}>
                    <h5>{column.title}</h5>
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

export default cvPage