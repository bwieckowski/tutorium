import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */
interface ImageProps {
    src: string;
    alt?: string;
    className?: string;

}
const Image: React.FC<ImageProps> = ({src, alt = "tekst alternatywny", className}) => (
    <img className={className} src={src} alt={alt}/>
)
export default Image
