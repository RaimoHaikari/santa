import React from 'react';

const Pixel = ({pixelWidth, y, x, style }) => {
    return (
        <rect 
            x={x} 
            y={y} 
            width={pixelWidth} 
            height={pixelWidth} 
            style = {style}
        />
    );
};

export default Pixel;