import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import styles from "./entry-wrapper.module.css"

const shortcodes = { Link } // Provide common components here

export default function EntryWrapper({ data: { mdx } }) {
  return (
    <div className={styles.wrapper}>
      <Link to="/">back to index</Link>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        label
      }
    }
  }
`
