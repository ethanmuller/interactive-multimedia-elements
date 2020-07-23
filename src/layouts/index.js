import React from "react"
import PropTypes from "prop-types"

import styles from "./layout.module.css"

import Title from "../vector/ime.svg"

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.marquee}>
        <div className={styles.marqueeInner}>
          <Title className={styles.title} />
          <Title className={styles.title} />
        </div>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
