import Row from "./Row";
import Arms from "./Arms";
import Neighborhood from "./Neighborhood";


const Canvas = ({arms, colors, image, margins, neighborhood, pixelWidth}) => {


    const width = margins.left + (image[0].length * pixelWidth) + margins.right;
    const height = margins.top + (image.length * pixelWidth) +  margins.bottom;

    /*
     *
     */
    return (
        <svg viewBox={`0 0 ${width} ${height}`}>


        {
            image.map((r,i) => {

                const c = colors[i];
                // const c = undefined;

                return(
                    <Row 
                        key = {`santa-pxl-row-${i}`}
                        index = { i } 
                        margins = { margins }
                        pixels = { r }
                        colors = { c }
                        pixelWidth = { pixelWidth }
                    />
                )
            })
        }
        <Arms 
            pixelWidth= { pixelWidth }
            arms = { arms }
            margins = { margins }
        />

        <Neighborhood 
            neighborhood = { neighborhood }
            margins = { margins }
            pixelWidth= { pixelWidth }
        />

        </svg>
    );
};

export default Canvas;