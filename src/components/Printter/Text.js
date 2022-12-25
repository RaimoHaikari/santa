    /*
          x={x + width / 2}
          y={y + height / 2}
          dominant-baseline="middle"
          text-anchor="middle"

          <text x="25" y="25" dominant-baseline="middle" text-anchor="middle">1</text>
    */

const Text = ({pixelWidth, x, y, value}) => {
    return (
        <text
            x = {x + pixelWidth / 2}
            y = {y + pixelWidth / 2}
            dominantBaseline="middle"
            textAnchor="middle"
        >
        {
            value
        }
        </text>
    );
};

export default Text;