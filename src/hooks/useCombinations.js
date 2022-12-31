import { useRef, useEffect, useState } from "react";

const values = [-1, 0, 1];

/*
 * Muodostetaan kaikki vaihtoehdot, joihin tulostusvarren vivut on mahdollista
 * yhden siirtoliikkeen aikana mahdollista asetella.
 */
export const useCombinations = () => {

    const _combinations = useRef([])
    const [armLength, setArmLength] = useState(0)
    const [combinations, setCombinations] = useState([])

    const setupCombinations = (level, items) => {

        if(level === armLength){
            _combinations.current.push(items)
            return
        }
    

        let nextLevel = level + 1;

        for(let i = 0; i < values.length; i++){
            setupCombinations(nextLevel, items.concat([values[i]]));
        }

        if(level === 0){
            setCombinations(_combinations.current)
        }

        return

    }

    
    useEffect(() => {

        if(armLength === 0)
            return;

        setupCombinations(0, []);

    }, [armLength]); 
    


    const setDepth = (val) => {
        setArmLength(val);
    } 

    return {
        combinations,
        setDepth
    }
    
}