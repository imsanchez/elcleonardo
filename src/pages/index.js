import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'

import style from './style.module.scss'

import LazyLoad from "vanilla-lazyload"
//FancyBox
import '../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css'

// class RootIndex extends React.Component {
//   constructor(props) {
//     super(props);
//     this.gallery = get(this, 'props.data.contentfulPages.content')
//     this.state = {
//       galleryElements: []
//     }
//   }
//   componentDidMount() {
//     const galleryElements = []
//     this.gallery.map((gallery, i) => {
//       const imageElements = []
//       gallery.images.map((image, x) => {
//         imageElements.push(
//           <a href={`https:${image.file.url}`} data-fancybox={`gallery-${i}`} data-caption={`${image.title} ${image.description}`} key={x} hidden>
//             <img src={`https:${image.file.url}`} />
//           </a>
//         )
//       })
//       galleryElements.push(imageElements)
//     })

//     this.setState({
//       galleryElements: galleryElements
//     })

//     if (typeof window !== 'undefined') {
//       const jQuery = require('jquery')
//       window.jQuery = window.$ = jQuery
//       require('jquery-mousewheel')
//       require('@fancyapps/fancybox')
//       $(function() {
//         $("#scroller").mousewheel(function(event, delta) {
//           // console.log('Document: ' + $(document).scrollTop())
//           // console.log('Offset: ' + Math.floor($("#scroller").offset().top))
//           if((this.scrollLeft < 1 && delta == 1) || (Math.floor($(document).scrollTop()) < Math.floor($("#scroller").offset().top))) {
            
//           } else {
//             this.scrollLeft -= (delta * 50)
//             event.preventDefault()
//           }
//         })
//       })
//     }
//   }
//   render() {
//     return (
//       <Layout location={this.props.location} >
//           <SEO title="" />
//           <div id="scroller" className={style.wrapper}>
//             {
//               this.gallery.map((gallery, i) => {
//                 return (
//                   <div className={style.wrapper_slide} key={i}>
//                     <div className={`slide ${style.wrapper_slide__container}`}>
//                       <a className={style.gallery_link} data-fancybox-trigger={`gallery-${i}`} onClick={(e) => {e.preventDefault()}}>
//                         <img className={style.gallery_link__image} src={`https:${gallery.thumb.file.url}`} />
//                       </a>
//                       {
//                         this.state.galleryElements.map((imageElements, x) => {
//                           return (i == x) && imageElements
//                         })
//                       }
//                     </div>
//                   </div>
//                 )
//               })
//             }
//           </div>
//       </Layout>
//     )
//   }
// }


//   if (typeof window !== 'undefined') {
//   }
//   const jQuery = require('jquery')
//   window.jQuery = window.$ = jQuery
//   require('jquery-mousewheel')
//   require('@fancyapps/fancybox')
  
// const RootIndex = ({ data }) => {
//   //if (typeof window !== 'undefined') {
//     //const jQuery = require('jquery')
//     //window.jQuery = window.$ = require('jquery')
//     //require('jquery-mousewheel')
//     //require('@fancyapps/fancybox')
//     // $(function() {
//     //   $("#scroller").mousewheel(function(event, delta) {
//     //     // console.log('Document: ' + $(document).scrollTop())
//     //     // console.log('Offset: ' + Math.floor($("#scroller").offset().top))
//     //     if((this.scrollLeft < 1 && delta == 1) || (Math.floor($(document).scrollTop()) < Math.floor($("#scroller").offset().top))) {
          
//     //     } else {
//     //       this.scrollLeft -= (delta * 50)
//     //       event.preventDefault()
//     //     }
//     //   })
//     // })
//   //}
//   return (
//     <Layout>
//         <SEO title="" />
//         <div id="scroller" className={style.wrapper}>
//           {
//             data.contentfulPages.content.map((gallery, i) => {
//               return (
//                 <div className={style.wrapper_slide} key={i}>
//                   <div className={`slide ${style.wrapper_slide__container}`}>
//                     <a className={style.gallery_link} data-fancybox-trigger={`gallery-${i}`} onClick={(e) => {e.preventDefault()}}>
//                       <img className={style.gallery_link__image} src={`https:${gallery.thumb.file.url}`} />
//                     </a>
//                     {
//                       gallery.images.map((image, x) => {
//                         <a href={`https:${image.file.url}`} data-fancybox={`gallery-${i}`} data-caption={`${image.title} ${image.description}`} key={x} hidden>
//                           <img src={`https:${image.file.url}`} />
//                         </a>
//                       })
//                     }
//                   </div>
//                 </div>
//               )
//             })
//           }
//         </div>
//     </Layout>
//   )
// };

const pageQuery = graphql`
  query HomeQuery {
    contentfulPage(title: {eq: "Home"}) {
      title
      metaTitle {
        metaTitle
      }
      metaDescription {
        metaDescription
      }
      content {
        ... on ContentfulGallery {
          title
          thumb {
            title
            description
            file {
              url
            }
          }
          images {
            title
            description
            file {
              url
            }
          }
          categories {
            name
          }
        }
      }
    }
  }`

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
          <SEO title="" />
          <div id="scroller" className={style.wrapper}>
            <StaticQuery
              query={pageQuery}
              render={data => data.contentfulPage.content.map((gallery, i) => {
                let imageELements = [];
                gallery.images.map((image, x) => imageELements.push(
                  <a href={`https:${image.file.url}`} data-fancybox={`gallery-${i}`} data-caption={`${image.title} ${image.description}`} key={x} hidden>
                    <img src={`https:${image.file.url}`} />
                  </a>
                ))
                return (
                  <div className={style.wrapper_slide} key={i}>
                    <div className={`slide ${style.wrapper_slide__container}`}>
                      <a className={style.gallery_link} data-fancybox-trigger={`gallery-${i}`} onClick={(e) => {e.preventDefault()}}>
                        <img className={`${style.gallery_link__image} lazyload`} src={`https:${gallery.thumb.file.url}?w=320&q=15`} data-src={`https:${gallery.thumb.file.url}`} />
                      </a>
                      {imageELements}
                    </div>
                  </div>
                )
              })}
            />
          </div>
      </Layout>
    )
  }
}

export default RootIndex