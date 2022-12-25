import { useEffect, useRef } from "react";

/*
 * Fetch Kaggle Santa 2022 submission file from Github repo
 */
export const useImage = (size) => {

    const image = useRef(null);

    const setupImage = async () => {

        let arr = [];

        for(let rows = 0; rows < size; rows++){
            let row = [];

            for(let cols = 0; cols < size; cols++){
                let col = [];
                
                col[0] = 0;

                row.push(col);
            }

            arr.push(row);
        }

        image.current = arr;

    }

    const resetHits = () => {

        let updatedImage = image.current.map((row) => {

            let updatedRow = row.map((col) => {

                let updatedCol = [0];

                return updatedCol;
            })

            return updatedRow
        })

        image.current = updatedImage;

    }

    const updateHits = (r, c) => {

        
        let updatedImage = image.current.map((row, index) => {

            if(index !== r) return row;

            let updatedRow = row.map((col, i) => {

                if(i !== c) return col;

                let updatedCol = [];

                updatedCol[0] = col[0] + 1;

                return updatedCol
            })

            return updatedRow;
        })
        
        image.current = updatedImage;
    }


    useEffect(() => {
        setupImage();
    }, []); 

    return {
        image,
        resetHits,
        updateHits
    };

}