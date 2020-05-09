import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import SEO from '../components/seo'

import style from './style.module.scss'

//Fancybox
import '../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css'

class VideosPage extends React.Component {
  constructor(props) {
    super(props)
    this.siteTitle = get(this, 'props.data.site.siteMetadata.title')
    this.contentfulVideos = get(this, 'props.data.allContentfulVideos.edges')
    this.state = {
      videos: []
    }
  }
  componentDidMount() {
    const newVideos = this.state.videos
    this.contentfulVideos[0].node.vimeoIDs.map((id, i) => {
      fetch(`https://vimeo.com/api/v2/video/${id}.json`).then(response => response.json()).then((jsonData) => {
        newVideos.push(
          <div className={`slide ${style.wrapper_slide}`} key={i}>
            <a data-fancybox href={`https://vimeo.com/${id}`}>
              <div className={style.wrapper_slide__container}>
                <img alt={`${jsonData[0].title} by ${jsonData[0].user_name}`} title={jsonData[0].title} src={jsonData[0].thumbnail_large} />
                
                <div className="play-btn">
                  <div className="play-btn__wrapper">
                    <h6>{jsonData[0].title}</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                      <polygon className="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
                      <path className="play-btn__svg" d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        )
        this.setState({videos: newVideos})
      }).catch((error) => {
        console.error(error)
      })
    })
    
    // if (typeof window !== 'undefined') {
    //   const jQuery = require('jquery')
    //   window.jQuery = window.$ = jQuery
    //   require('jquery-mousewheel')
    //   require('@fancyapps/fancybox')
    //   $(function() {
    //     $("#scroller").mousewheel(function(event, delta) {
    //       // console.log('Document: ' + $(document).scrollTop())
    //       // console.log('Offset: ' + Math.floor($("#scroller").offset().top))
    //       if((this.scrollLeft < 1 && delta == 1) || (Math.floor($(document).scrollTop()) < Math.floor($("#scroller").offset().top))) {
            
    //       } else {
    //         this.scrollLeft -= (delta * 50)
    //         event.preventDefault()
    //       }
    //     })
    //   })
    // }
  }
  render() {
    return (
      <Layout location={this.props.location} >
          <SEO title="Videos" description="Explore all of the many publications featuring Shaun Leonardo and his artwork." />
          <div id="scroller" className={style.wrapper}>
            {this.state.videos}
          </div>
      </Layout>
    )
  }
}

export default VideosPage

export const pageQuery = graphql`
  query VideosQuery {
    allContentfulVideos {
      edges {
        node {
          vimeoIDs
        }
      }
    }
  }
`
