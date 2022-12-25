import StatsRow from "./StatsRow";

const Hits = ({image, margins, pixelWidth}) => {

    const width = margins.left + (image[0].length * pixelWidth) + margins.right;
    const height = margins.top + (image.length * pixelWidth) +  margins.bottom;

    /*
     *
     */
    return (
        <svg viewBox={`0 0 ${width} ${height}`}>
        {
            image.map((r,i) => {
                return(
                    <StatsRow 
                        key = {`santa-pxl-row-${i}`}
                        index = { i } 
                        margins = { margins }
                        pixels = { r }
                        pixelWidth = { pixelWidth }
                    />
                )
            })
        }
        </svg>
    );
};

export default Hits;