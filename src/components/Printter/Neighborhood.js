

const Neighborhood = ({neighborhood, margins, pixelWidth}) => {

    const side = 10;

    return (
        <g  transform={`translate(${margins.left + pixelWidth*0.5}, ${margins.top + pixelWidth*0.5})`} className="neighbors">
        {
            neighborhood.map((n,i) => {

                //console.log(n);
                //n.c * pixelWidth
                //  n.r * pixelWidth

                return (
                    <rect 
                        key = {`neighbor-${i}`}
                        x = { n.c * pixelWidth - 0.5 * side}
                        y = { n.r * pixelWidth - 0.5 * side}
                        width={ side } 
                        height={ side }
                    />
                )
            })
        }
        </g>
    );
};

export default Neighborhood;