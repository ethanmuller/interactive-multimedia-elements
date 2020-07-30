import React from "react"
import { Link, graphql } from "gatsby"

import styles from './entry-list.module.css'

// const entries = [
//   {
//     label: 'r1',
//     title: 'Advantage Triangle',
//   },
//   {
//     label: 'r2',
//     title: 'Persistent World',
//   },
//   {
//     label: 'r3',
//     title: 'Geographical Coordinates',
//   },
//   {
//     label: 'r4',
//     title: 'Dynamic Rules',
//   },
// ]

const IndexPage = ({ data }) => {
  // console.log(data)
  const nodes = data.allMdx.nodes
  // const nodes = entries
  
  return (
    <>
      <ul className={styles.entryList}>
        {nodes.map((node) => {
          const d = node.frontmatter
          /* const d = node */
          
          return (
            <li key={node.slug}>
              <Link to={node.slug} className={styles.entryListItem}>
                <span className={styles.label}>{d.label}</span>
                <span className={styles.separator}></span>
                <span className={styles.name}>{d.title}</span>
              </Link>
            </li>
          )})}
      </ul>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allMdx {
      nodes {
        slug
        frontmatter {
          title
          label
        }
      }
    }
  }
`;

export default IndexPage
