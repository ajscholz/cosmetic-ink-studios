import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people!</h1>
    <p>Welcome to the brand new home of Cosmetic Ink Studios.</p>
    <p>
      We're in the process of building a new site, so please be patient with us.
    </p>
    <p>
      For now you can see our work or book an consult on{" "}
      <a
        href="https://www.instagram.com/cosmeticinkstudios/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </p>
  </Layout>
)

export default IndexPage
