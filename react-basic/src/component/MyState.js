import { useState } from "react";

function MyState() {

    //함수형 컴포넌트에서는 userState() 훅으로 state를 관리합니다. 
    const [color, setColor] = useState('black');

    const red = () => {
        //값을 변경할 때는 setter를 사용한다.
        setColor("red");
        
        //값을 setter를 사용하지 않고 직접 바꾸게 되면 리랜더링이 작동하지 않는다.
        // color = 'red' // 이렇게 하면 안됨!!
    }

    //const blue = () => setColor("blue");

    return (
        <>
            <h3 style={{color: color}}>현재 색상 {color}</h3>
            <button type="button" onClick={red}>붉은색</button>
            <button type="button" onClick={() => setColor("blue")}>푸른색</button>
            <button type="button" onClick={() => setColor("orange")}>주황색</button>
        </>
    )

}

export default MyState;