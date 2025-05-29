import { useMemo, useState } from "react";

function HookMemo() {
    
    const [num, setNum] = useState('');
    const [text, setText] = useState('');

    // const calc = (() => {
    //     //계산이 오래 걸리는 예시 함수
    //     console.log("계산 시작");
    //     let i = 0;
    //     while(i <= 10000) i++;
    //     console.log("계산 완료");

    //     return num % 2 == 0 ? "짝수" : "홀수";
    // })();

    const calc = useMemo( () => {
        //계산이 오래 걸리는 예시 함수
        console.log("계산 시작");
        let i = 0;
        while(i <= 10000) i++;
        console.log("계산 완료");

        return num % 2 == 0 ? "짝수" : "홀수";
    }, [num]); //num이 변경될때만 실행됨


    return(
        <>
            <h3>useMemo훅</h3>

            <input type="number" onChange={e => setNum(e.target.value)} value={num}/>
            <br/>
            결과: {calc}

            <br/>
            <input type="text" onChange={e => setText(e.target.value)} value={text}></input>
        </>
    )
}

export default HookMemo;