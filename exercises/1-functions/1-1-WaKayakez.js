"use strict";

drawLine();

funtion drawline(){

    let canvas = document.querySelector("canvas")
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d")

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(175, 50);
    context.lineTo(300,50);
    context.stroke();
}