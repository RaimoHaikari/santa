import { useEffect, useState } from "react";

export const useNeighbors = () => {

    const [combinations, setCombinations] = useState([])

    /*
     *  The neighbors of a configuration are those configurations that can be reached from it in a single step.
     */
    const getNeighbors = (config) => {

        let len = config.length;


        let neighborhood = combinations.map(c => {

            let neighbor = [];
            let i = 0;

            //console.log(c)

            while (i < len) {

                

                let arr = rotateLink(config[i], c[i])
                //console.log(".", i, config[i], c[i], arr)
                neighbor.push(arr)
    
                i++
    
            }


            //console.log(neighbor)
            //console.log("...........................")

            return neighbor

        })

        return neighborhood;
    

    }


    const rotateLink = (vector, direction) => {
        let [x,y] = vector;

        // Käännetään "viisaria" vastapäivään.
        if (direction === 1) {

            if (y >= x && y > -x)
                x = x - 1;
            else if (y > x && y <= -x)
                y = y - 1;
            else if (y <= x && y < -x)
                x = x + 1;
            else 
                y = y + 1;

        } else if (direction === -1) {

            if(y > x && y >= -x)
                x = x + 1;
            else if(y >= x && y < -x)
                y = y + 1;
            else if(y < x && y <= -x)
                x = x - 1;
            else
                y = y - 1;

        }

        return [x,y]
    }


    return {
        getNeighbors,
        setCombinations
    }

}