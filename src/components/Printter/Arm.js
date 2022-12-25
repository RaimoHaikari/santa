const Arm = ({x1, y1, x2, y2, pixelWidth}) => {
    return (
        <line 
            x1={y1 * pixelWidth}
            y1={x1 * pixelWidth}
            x2={y2 * pixelWidth} 
            y2={x2 * pixelWidth}
        />
    );
};

export default Arm;