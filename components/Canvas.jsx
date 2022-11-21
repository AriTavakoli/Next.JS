import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Canvas() {

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = "green";
    ctx.fillRect(10, 400, 150, 100);

    const mouse = {
      x: undefined,
      y: undefined,
    };


  });




  return (
    <>
      <button onClick={() => setMode('drawLine')}>Draw Line</button>
      <button onClick={() => setMode('drawSquare')}>Draw Square</button>
      <canvas id="canvas"> </canvas>



    </>
  );
}