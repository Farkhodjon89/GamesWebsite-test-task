import {createGlobalStyle} from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    background-color: #151515;
    color: #fff;
  }

  .slick-slide img {
    height: 300px;
    width: 100%;
    
    @media (min-width: 768px) {
      height: 400px;
    }
  }


`

export default function App({Component, pageProps}) {
    return <>
        <Component {...pageProps} />
        <GlobalStyle/>
    </>
}
