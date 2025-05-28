import { useState } from "react";


function EventComponent2() {

    const [data, setData] = useState({name: '', todo: ''});

    const handleChange = (e) => {
        let value = e.target.value;
        let key = e.target.name;
        
        // let newData = {...data, [key]:value}; //obj를 복사한 후에, 키:값 으로 변경함
        // setData(newData);

        // 직전에 사용했던 state값을 얻어야 하는 경우
        // 이 함수의 첫번째 매개변수에는 state이전값을 넣어주도록 약속 되어 있음.
        setData((prev) => {
            console.log(prev);
            // prev를 사용하고 return에 최종적으로 저장될 값을 던져주면 됩니다. 
            return {...prev, [key]: value}
        });
    }

    return (
        <>
            <h3>state를 객체로 관리하기</h3>
            <input type="text" placeholder="이름" name="name" onChange={handleChange}/>
            <br/>
            <input type="text" placeholder="할일" name="todo" onChange={handleChange}/>
            <br/>
            현재 사용자가 입력한 이름: {data.name}<br/>
            현재 사용자가 입력한 할일: {data.todo}
        </>
    )
}

export default EventComponent2;