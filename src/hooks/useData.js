import { useState, useEffect } from "react";

/*
 * Fetch Kaggle Santa 2022 submission file from Github repo
 */
export const useData = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    /*
     * Convert Kaggle submission file to JavaScript array
     */
    const submissionToArray = (str) => {

        //console.log(str)

        // convert text to array of lines
        let separateLines = str.split(/\r?\n|\r|\n/g);

        // remove title and last row (empty) 
        separateLines.shift();
        separateLines = separateLines.filter(line => line.length !== 0);

        /*
         * Now we have array string moves, like: ['1 0;-1 0', '1 -1;-1 0',...
         *
         * Lets convert those to nested array's of ints, like:
         * [
         *   [[1, 0],[-1, 0]],
         *   [[1,-1],[-1,0]],
         *   ....
         * ]
         */
        let armMoves = separateLines.map(line => {

            // split to joints
            let t1 = line.split(";")

            // split joint coordinates to array
            let t2 = t1.map(t => t.split(" "));

            /*
            * Numbers are still in string form. Lets convert those to ints.
            */
            t2 = t2.map(t => {
                return t.map(t3 => parseInt(t3))
            })

            return t2
        })

        return armMoves;

    }

    const fetchData = async () => {

        setLoading(true);

        const response = await fetch(url);
        const data = await response.text();

        const moves =  submissionToArray(data);

        setLoading(false);
        setData(moves);

    }

    useEffect(() => {
        fetchData();
    }, []); 

    return {
        data,
        loading
    };

}