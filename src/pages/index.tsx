import * as React from "react"
import { Link } from "gatsby"

import Layout from "components/Layout/layout"
import Jumbotron from 'modules/Jumbotron'
import SEO from "components/seo"
import TutoriumLabel from "modules/TutoriumSection/TutoriumSection";
import AboutMe from "modules/AboutMe";
import Lessons from "modules/Lessons";
import Opinions from "modules/Opinions"
import Contact from "modules/Contact";
import {  Element, animateScroll as scroll } from "react-scroll";

const aboutMeHandler = () => { scroll.scrollToBottom() };

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Element name={"home"}>
        <Jumbotron />
    </Element>
    <TutoriumLabel/>
    <Element name={"aboutMe"}>
        <AboutMe clickHandler={aboutMeHandler} />
    </Element>
    <Element name={"opinions"} >
        <Element name={"lessons"}>
            <Lessons />
        </Element>
    <Opinions />
    </Element>
    <Element name={"contact"}>
      <Contact />
    </Element>
  </Layout>
)

export default IndexPage
