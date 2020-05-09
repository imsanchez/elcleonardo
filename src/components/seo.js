/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, hasInstagram }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={title ? `%s | ${site.siteMetadata.title}` : ``}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin></link>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com/" crossorigin></link>
        <link rel="preconnect" href="https://images.ctfassets.net/" crossorigin></link>
        <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400|Raleway:500|Scope+One&display=swap" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js" integrity="sha384-98VlmQAtAtHOaEQ9j3q6IUMJyBPPo8ufF8+NSJ24pIXcO9IaiTxS1VA0U9o0tSZ7" crossOrigin="anonymous" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha384-vk5WoKIaW/vJyUAd9n/wmopsmNhiy+L2Z+SBxGYnUkunIxVxAv/UtMOhba/xskxh" crossOrigin="anonymous" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" integrity="sha384-Zm+UU4tdcfAm29vg+MTbfu//q5B/lInMbMCr4T8c9rQFyOv6PlfQYpB5wItcXWe7" crossOrigin="anonymous" defer></script>

        {hasInstagram &&
          <script async defer src="//www.instagram.com/embed.js"></script>
        }
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``,
  hasInstagram: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  hasInstagram: PropTypes.bool,
}

export default SEO
