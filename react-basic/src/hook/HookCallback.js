import React, { useCallback, useState } from "react";

function HookCallback() {

    const [count, setCount] = useState(0);

    const increase = useCallback(() => {
        setCount( prev => prev + 1 );
    }, []) //첫 렌더링시에만 함수를 생성함

    return (
        <> 
            <h3>useCallback훅</h3>
            <button type="button" onClick={increase}>버튼</button>
            <br/>
            현재값: {count}

            
            <Child increase={increase }/>
        </>
    )
}

//자식컴포넌트
const Child = React.memo(( {increase} ) => {
    //자식 컴포넌트에서 상위 컴포넌트의 state값을 변경하고 싶어!!

    console.log('부모에서 클릭하던, 자식에서 클릭하던 렌더링이 일어납니다.');

    return (
        <>
            <h3>자식 컴포넌트</h3>    
            <button type="button" onClick={ () => increase() } >증가!</button>    
        </>
    )
})




export default HookCallback;