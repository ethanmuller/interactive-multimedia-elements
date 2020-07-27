import React from "react"
import PropTypes from "prop-types"

import styles from "./layout.module.css"

import Title from "../vector/ime.svg"

const Layout = ({ children, pageContext }) => {
  console.log(pageContext.frontmatter)
  return (
    <>
      <div className={styles.marquee}>
        <div className={styles.marqueeInner}>
          <Title className={styles.title} />
          <Title className={styles.title} />
        </div>
      </div>
      <div className={styles.pageWrapper}>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
