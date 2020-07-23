import React from "react"
import { Link } from "gatsby"

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

const IndexPage = () => (
  <>
    <ul className={styles.entryList}>
      {entries.map((e) => (
        <li>
          <Link to="asfd" className={styles.entryListItem}>
            <span className={styles.label}>{e.label}</span>
            <span className={styles.separator}></span>
            <span className={styles.name}>{e.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </>
)

export default IndexPage
