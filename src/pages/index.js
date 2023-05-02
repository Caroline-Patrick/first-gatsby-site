import * as React from "react";
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6p5Mwkzj9K7N4vxG4JdnbLgiQhCfjCYWHZad90-TNuw&usqp=CAU&ec=48600112" alt="Two blue heeler puppies"/>
      <StaticImage src="https://doglime.com/wp-content/uploads/2019/12/Australian-Cattle-Dog-Puppies-in-a-trolley.jpg.webp" alt="Two blue heeler puppies"/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />
