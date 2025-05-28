import { useState } from "react";

function MyStateQ() {

    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1);
    }

    const minus = () => {
        setCount(count - 1);
    }

    return (
        <>
            <h3>카운트: {count}</h3>
            <button type="button" onClick={plus}>증가</button>
            <button type="button" onClick={minus}>감소</button>
            <button type="button" onClick={() => setCount(0)}>초기화</button>
        </>
    )
}

export default MyStateQ;