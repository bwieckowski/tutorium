/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import * as P from './parts'
import Header from "../../modules/Header/header"

const Layout = (props: LayoutProps) => (
  <>
    <P.GlobalStyle/>
    <Header />
    <div>
      <main>{props.children}</main>
      <P.StyledFooter>
        © Tutorium {new Date().getFullYear()} 2019 wszelkie prawa zastrzeżone
      </P.StyledFooter>
    </div>
  </>
)

interface LayoutProps {
  children: any
}

export default Layout
