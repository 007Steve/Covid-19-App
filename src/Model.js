import React from "react";
function Home() {
  return (
    <div className="model">
      <ml-stage
        id="stage"
        extents="top:10000px; right:10000px; bottom:15000px; left:25000px; front:20000px; back:10000px"
      ></ml-stage>
      <ml-model
        id="covid"
        src="https://cdn.glitch.com/acab74d6-f9a1-4f7a-8e7f-0a6ae9843206%2Fout%20(22).glb?v=1604427108603"
        alt-img="https://cdn.glitch.com/bd9a927e-50bd-4ada-9db5-ba92218cb609%2Falien.gif?v=1575916291484"
        model-animation="CINEMA_4D_Main, false, -1"
        model-animation-speed="1"
        model-scale="1.5 1.5 1.5"
      ></ml-model>
    </div>
  );
}

export default Home;
