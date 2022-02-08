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
  height: 150vh;
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
  width: 400px;
  height: 1000px;
  path {
    stroke: black;
    stroke-width: 3;
  }
`;

const svg = {
  start: { pathLength: 0 },
  end: { pathLength: 1, transition: { duration: 2 } },
};

function App() {
  const { scrollYProgress } = useViewportScroll();
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Svg
          viewBox="0 0 210 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            style={{ pathLength: scrollYProgress }}
            fill="transparent"
            d="M 76 37 q 1 4 11 -11 q 10 -14 -6 -1 q -2 -7 6 -12 q 7 -12 -8 -1 q -12 23 -12 35 q 1 37 0 31 q 9 29 4 43 q -7 9 -6 19 q -7 -3 -16 -3 q -12 3 -19 -4 q -2 -4 -10 5 q -4 -1 -5 1 q -1 6 1 9 q -10 4 -7 11 q 3 17 20 17 q -1 11 9 10 q 11 1 7 -14 q -1 0 -6 -2 q 7 -1 11 -14 q 3 10 20 20 q 37 15 34 24 q -4 13 -21 22 q -30 20 -54 11 q -12 -3 -7 -16 q 8 -11 63 -13 q 12 -2 34 1 q 30 7 49 20 q 30 15 38 34 q 1 9 -23 12 q -11 2 -54 -8 q -14 -3 -27 -15 q -7 -12 12 -22 q 14 -3 19 21 q 2 5 -14 38 q -21 43 -23 54 q -4 7 -7 57 q 5 17 -3 30 q -15 20 -24 15 q -5 -11 8 -20 q -2 -3 2 -18 q 1 -4 6 -8"
          ></motion.path>
        </Svg>
      </Wrapper>
    </>
  );
}

export default App;
