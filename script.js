body {
    margin: 0;
    padding: 0;
    overflow: scroll;
    background-color: #f4f4f4;
    height: 200vh; /* To allow scrolling */
}

#container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

img {
    position: absolute;
    cursor: move;
    border: 2px solid #333;
}

.resize-handle {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    background-color: blue;
    cursor: se-resize;
}

canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Disabled by default for drawing */
}

button {
    position: fixed;
    bottom: 10px;
    left: 10px;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
}

#pencilButton {
    bottom: 60px;
    background-color: #4CAF50;
    font-size: 24px;
}

button:hover {
    background-color: #45a049;
}

button:active {
    background-color: #3e8e41;
}
