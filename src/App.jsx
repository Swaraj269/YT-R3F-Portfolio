import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Content from "./Components/Content";
import MainThree from "./Components/MainThree";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const [scrollReady, setScrollReady] = useState(false);

  useLayoutEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });
    ScrollTrigger.refresh();
    setScrollReady(true);

    return () => {
      ScrollSmoother.get()?.kill();
    };
  }, []);

  return (
    <>
      <MainThree />
      <div id="smooth-wrapper">
        <div id="smooth-content">{scrollReady ? <Content /> : null}</div>
      </div>
    </>
  );
};

export default App;
