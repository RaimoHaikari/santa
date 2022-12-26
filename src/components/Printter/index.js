import { useEffect } from "react";
import { 
    faForwardStep,
    faPlay,
    faStop,
    faArrowLeftRotate
} from "@fortawesome/free-solid-svg-icons";

import { useData } from "../../hooks/useData";
import { useImage } from "../../hooks/useImage";
import { useTimer } from "../../hooks/useTimer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Canvas from "./Canvas";
import Hits from "./Hits";

import { colors } from "../../misc/colors_9_times_9"

const baseline = 'https://raw.githubusercontent.com/RaimoHaikari/tahtisadetta/main/Misc/9_9_baseline.csv';


const base = [0,0];

const pixelWidth = 50;

const margins = {
    top: 10,
    left: 10,
    bottom: 10,
    right: 10
}

const Printter = () => {

    const { data, loading } = useData(baseline);

    const { 
        index, 
        reset,
        setLength, 
        step,
        stepEnabled,
        startTimer, 
        stopTimer,
        timerFinished
    } = useTimer();



    const { 
        image,
        resetHits,
        updateHits
    } = useImage(9);

    useEffect(() => {
        if(data !== null){
            setLength(data.length)
        }
    }, [data])

    /*
     * Convert cartesian coordinates to array indexes
     */
    const cartesian_to_array = (x,y,side) => {

        const i = Math.floor((side - 1) / 2) - y;
        const j = Math.floor((side - 1) / 2) + x;

        return [i,j];

    }

    /*
     * 
     */
    const getArms = () => {

        let val = [];

        let x = base[0];
        let y = base[1];

        data[index].forEach((c,i) => {

            let i1 = x;
            let j1 = y; 

            let t1 = cartesian_to_array(i1,j1, image.current.length)

            let i2 = i1 + c[0];
            let j2 = j1 + c[1];

            let t2 = cartesian_to_array(i2,j2, image.current.length)
            
            val.push({
                i1: i1,
                j1: j1,
                x1: t1[0],
                y1: t1[1],
                i2: i2,
                j2: j2,
                x2: t2[0],
                y2: t2[1]
            });

            x = i2;
            y = j2;
        })

        const {x2, y2} = val[val.length-1];


        if(index !== 0){

            //image.current[x2][y2][0] = image.current[x2][y2][0] + 1;
            updateHits(x2, y2);
        }

        return val;
    }

    const resetHandler = () => {
        
        resetHits()
        reset()
    }


    const displayLayout = () => {

        const arms = getArms();

        const resetButtonDisabled = timerFinished() === true
            ? false
            : stepEnabled() === false
                ? true
                : false;

        const runButtonDisabled = timerFinished() === true
            ? true
            : false;

        return (
            <div className="container">

                

                <button
                    onClick={() => step()}
                    disabled = { stepEnabled() === false }
                    className="action-button"
                >
                    <FontAwesomeIcon  icon={faForwardStep} />
                </button>

                {
                    stepEnabled() === true 
                    ? <button disabled = { runButtonDisabled } className="action-button" onClick={() => startTimer()}><FontAwesomeIcon  icon={faPlay} /></button>
                    : <button disabled = { runButtonDisabled } className="action-button" onClick={() => stopTimer()}><FontAwesomeIcon  icon={faStop} /></button>
                }


                

                <button 
                    onClick={() => resetHandler()}
                    disabled = { resetButtonDisabled }
                    className="action-button"
                >
                    <FontAwesomeIcon  icon={faArrowLeftRotate} />
                </button>



                <span className="margin-left with-letter-spacing fw-bold">{`Step: ${index} / ${data.length-1}`}</span>

                <div className="even-columns">

                    <Canvas 
                        image = { image.current }
                        colors = { colors }
                        pixelWidth = { pixelWidth }
                        margins = { margins }
                        arms = {arms}
                    />

                    <Hits 
                        image = { image.current }
                        pixelWidth = { pixelWidth }
                        margins = { margins }
                    />
                    
                </div>


            </div>
        )
    }


    return (
        <>
        {
            loading === true
            ? <p>L.O.A.D.I.N.G . . .</p>
            : data === null
                ? null
                : displayLayout()
        }
        </>
    );
};

export default Printter;