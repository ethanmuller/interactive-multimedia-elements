import React from "react"
import { Link, graphql } from "gatsby"

import styles from './entry-list.module.css'

const entries = [
  {
    label: 'r1',
    name: 'Advantage Triangle',
  },
  {
    label: 'r2',
    name: 'Persistent World',
  },
  {
    label: 'r3',
    name: 'Geographical Coordinates',
  },
  {
    label: 'r4',
    name: 'Dynamic Rules',
  },
]

const IndexPage = ({ data }) => {
  const nodes = data.allMdx.nodes
  
  return (
    <>
      <ul className={styles.entryList}>
        {nodes.map((node) => {
          const d = node.frontmatter
          
          return (
            <li key={node.slug}>
              <Link to={node.slug} className={styles.entryListItem}>
                <span className={styles.label}>{d.thing}</span>
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
        }
      }
    }
  }
`;

export default IndexPage
