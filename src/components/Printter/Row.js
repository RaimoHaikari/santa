import Pixel from "./Pixel";

const Row = ({colors, index, margins, pixels, pixelWidth}) => {

    return (
        <g
            transform={`translate(${margins.left}, ${margins.top + pixelWidth*index})`}
            className="santa-pixels"
        >
        {
            pixels.map((pixel, i) => {

                const fill = pixel[0] !== 0 ? `rgb(${colors[i][0]},${colors[i][1]},${colors[i][2]})`:"none";
                //const fill = pixel[0] !== 0 ? `red`:"none";
                
                const style = {
                    fill: fill
                };

                return (
                    <Pixel
                        key = {`santa-pxl-${i}`}
                        x = {pixelWidth * i}
                        y = {0}
                        pixelWidth = { pixelWidth }
                        style = { style }
                    />
                )
            })
        }
        </g>
    );
};

export default Row;