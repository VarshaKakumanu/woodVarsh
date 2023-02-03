import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import back from "../assert/back.png";


const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef(null);

  const { y } = useSpring({
    from: { y: 0 },
    to: { y: scrollY * -0.5 },
  });

  const handleScroll = () => {
    setScrollY(parallaxRef.current.scrollTop);
  };

  return (
    <div
      style={{ height: "100vh", overflow: "scroll" }}
      onScroll={handleScroll}
      ref={parallaxRef}
    >
      <animated.div style={{ transform: `translateY(${y}px)` }}>
        <div style={{ height: "100vh", background: "lightblue" , backgroundImage:`url(${back})`}} />
      </animated.div>
      <div style={{ height: "100vh", background: "lightgray" }} />
    </div>
  );
};

export default Parallax;
