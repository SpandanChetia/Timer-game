import {forwardRef, useImperativeHandle, useRef} from "react";
const ResultModal =  forwardRef(({result, targetTime, remainingTime, onReset}, ref) => {

    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime /1000).toFixed(2);
    useImperativeHandle(ref, ()=> {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });
    
    return (
    <dialog ref={dialog} className="result-modal"> 
        {userLost && <h2>You {result}</h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
        <form method="dialog">
            <button onClick={onReset}>Close</button>
        </form>
    </dialog>
    );
})

export default ResultModal;