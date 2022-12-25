import Arm from "./Arm";

const Arms = ({arms, margins, pixelWidth}) => {

    return (
        <g transform={`translate(${margins.left + pixelWidth*0.5}, ${margins.top + pixelWidth*0.5})`} className="arms">
        {
            arms.map((arm, i) => {

                return (
                    <Arm 
                        key = {`arm-${i}`}
                        x1= { arm.x1 }
                        y1= { arm.y1 }
                        x2= { arm.x2 } 
                        y2= { arm.y2 }
                        pixelWidth = { pixelWidth }
                    />
                )
            })
        }
        </g>
    );
};

export default Arms;