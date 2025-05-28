import { useState } from "react";

function EventComponent() {

    //1. 인풋값을 state로 관리하기
    const [nick, setNick] = useState('');
    const [todo, setTodo] = useState('');

    const handleNick = (e) => {
        //인풋 태그의 값을 얻어야 한다. 어떡해?
        setNick(e.target.value);
    }

    const handleClick = () => alert(`${nick}님의 할일: ${todo}`);

    const handleKeyUp = (e) => {
        if(e.key === 'Enter'){
            handleClick();
        }
    }

    return (
        <>
            {/* 사용자가 버튼을 클릭하면, 이름, 할일 경고창으로 출력 */}
            <h3>리액트 이벤트</h3>

            <label>이름</label>
            <input type="text" onChange={handleNick} value={nick}/><br/>

            <label>할일</label>
            <input type="text" 
                   onChange={ (e) => setTodo(e.target.value)} 
                   onKeyUp={ handleKeyUp }
                   value={todo}
                   /><br/>

            <button type="button" onClick={handleClick}>오늘의 할일은?</button>
        </>
    )
}

export default EventComponent;