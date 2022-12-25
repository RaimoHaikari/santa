import Pixel from "./Pixel";
import Text from "./Text";

const StatsRow = ({index, margins, pixels, pixelWidth}) => {

    return (
        <g
            transform={`translate(${margins.left}, ${margins.top + pixelWidth*index})`}
            className="santa-hits"
        >
        {
            pixels.map((pixel, i) => {

                const fill = "none";
                
                const style = {
                    fill: fill
                };

                return (
                    <g
                        key = {`santa-hits-g-${i}`}
                    >
                        <Pixel
                            key = {`santa-hits-pxl-${i}`}
                            x = {pixelWidth * i}
                            y = {0}
                            pixelWidth = { pixelWidth }
                            style = { style }
                        />
                        <Text 
                            key = {`santa-hits-count-${i}`}
                            x = {pixelWidth * i}
                            y = {0}
                            pixelWidth = { pixelWidth }
                            value = {pixel[0] / 2}
                        />
                    </g>
                )
            })
        }
        </g>
    );
};

export default StatsRow;