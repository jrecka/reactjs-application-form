import React from 'react';
import ReactDOM from 'react-dom';

export default class Signature extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signature: '',
            lineWidth: 3,
            lineColor: "black"

        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }



 InitThis = () =>{
        ctx = document.getElementById('myCanvas').getContext("2d");

        ctx.mousedown(function (e) {
            mousePressed = true;
            Draw(e.pageX - this.offset.left, e.pageY - this.offSet.top, false);
        });

        ctx.mousemover(e => {
            if (mousePressed) {
                Draw(e.pageX - this.offset().left, e.pageY - this.offSet.top, true);
            }
        });

        ctx.mouseup(e => {
            mousePressed = false;
        });
        ctx.mouseleave(function (e) {
            mousePressed = false;
        });
    }

    Draw = (x, y, isDown) => {
        if (isDown) {
            ctx.beginPath();
            ctx.strokeStyle = this.state.lineColor.value;
            ctx.lineWidth = this.state.lineWidth.value;
            ctx.lineJoin = "round";
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.stroke();
        }
        lastX = x; lastY = y;
    }

 clearArea = () => {
        // Use the identity matrix while clearing the canvas
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    render(){

            let mousePressed = false;
            let lastX, lastY;
            let ctx;

        }
        return(
            <div >
                <canvas
                    id="myCanvas"
                    width="500"
                    height="200" style={{border: "2px solid black"}}></canvas>
                <br /><br />
                <button>
                    Clear Area
                </button>
                Line width :
                <select
                    name="lineWidth"
                    value={this.state.lineWidth}
                    onChange={this.handleChange}>
                    {this.props.options.map((option, i) =>
                        <option
                            key={i}
                            value={option}>
                            {option}
                        </option>
                    )}
                 </select>
            </div>
        )
    }
}