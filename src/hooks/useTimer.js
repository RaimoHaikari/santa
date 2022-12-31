import { useState, useEffect } from "react";

export const useTimer = () => {

    const [index, setIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(1);

    const [intervalID, setIntervalID] = useState(null)

    const hasTimerEnded = index >= endIndex - 1
    const isTimerRunning = intervalID != null

    const update = () => {
        setIndex(index => index + 1)
    }

    const reset = () => {
        setIndex(0);
        stopTimer();
    }

    const startTimer = () => {

        if (!hasTimerEnded && !isTimerRunning) {
            setIntervalID(setInterval(update, 20))
        }

    }

    /* 
     * Kuinka monta siirtoa tulostettava ratkaisu sisältää
     */
    const setLength = (val) => {
        setEndIndex(val);
    }

    /*
     * Suoritetaan yksi askel manuaalisesti.
     * - käytössä kun animointi ei ole päällä
     */
    const step = () => {
        if (!hasTimerEnded && !isTimerRunning)
            update()
    }

    const stepEnabled = () => {
        return (hasTimerEnded === false && isTimerRunning === false)
    }

    const timerFinished = () => {
        return hasTimerEnded
    }

    const stopTimer = () => {
        clearInterval(intervalID)
        setIntervalID(null)
    }

    // clear interval when the timer ends
    useEffect(() => {

        if (hasTimerEnded) {
            clearInterval(intervalID)
            setIntervalID(null)
        }

    }, [hasTimerEnded])

    // clear interval when component unmounts
    useEffect(() => () => {

        clearInterval(intervalID)

    }, [])

    return {
        index,
        reset,
        setLength,
        step,
        stepEnabled,
        startTimer,
        stopTimer,
        timerFinished
    }
}