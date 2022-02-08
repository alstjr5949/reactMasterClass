import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: 'Source Sans Pro', sans-serif;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	font-weight: 300;
	line-height: 1.2;
  color: black;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
`;

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Svg = styled.svg`
  width: 300px;
  height: 200px;
  path {
    stroke: black;
    stroke-width: 1;
  }
`;

const svg = {
  start: { pathLength: 0 },
  end: { pathLength: 1, transition: { duration: 2 } },
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Svg
          viewBox="0 0 142 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={svg}
            initial={"start"}
            animate={"end"}
            fill="transparent"
            d="M95.4452 42.1267C95.4452 42.1267 47.9198 71.6583 21.4034 87.3221C11.8167 93.0089 4.98367 96.8999 4.16778 96.9997C1.00622 97.1992 31.908 3.61582 34.7636 2.4186C37.6192 1.22137 78.7195 -1.27286 74.8441 5.81074C70.9686 12.8943 1.51615 95.8024 1.00622 94.9045C0.496288 94.0066 31.398 48.5119 76.4759 8.10543C76.4759 8.10543 77.9037 6.6089 77.6997 11.9964C77.4957 17.384 81.3712 17.384 83.1049 17.9826C84.8387 18.4814 9.98099 87.1225 7.94127 90.3151C5.90155 93.5078 89.734 18.1821 95.4452 10.6994C95.4452 10.6994 96.3631 8.80382 101.87 9.5022C107.378 10.2006 138.891 8.80382 140.931 11.3978C142.971 13.9918 99.1167 39.9318 99.1167 39.9318"
          ></motion.path>
          <motion.path
            variants={svg}
            initial={"start"}
            animate={"end"}
            fill="transparent"
            d="M20.4856 87.8205C20.4856 87.8205 86.0626 58.9872 93.2016 56.0939V45.6182"
          ></motion.path>
        </Svg>
      </Wrapper>
    </>
  );
}

export default App;
