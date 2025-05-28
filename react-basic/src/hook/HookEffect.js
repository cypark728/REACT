import { useEffect, useState } from "react";

function HookEffect() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    // //useEffect훅 - 컴포넌트의 생명주기를 다룹니다.
    // useEffect(() => {
    //     console.log("랜더링 이후에 실행이 됩니다.");
    // });

    // useEffect( () => {
    //     console.log('마운트 이후에 딱 1번 실행 됩니다.');
    // }, []);

    useEffect( () => {
        console.log('마운트 이후, 특정 state가 업데이트 된 이후에 실행됩니다.');
    }, [name]); //name이 바뀌면 effect실행됨, (,로 나열가능)

    console.log('화면 실행 마운트 이전');

    return (
        <>
            <h3>useEffect훅</h3>
            <input type="text" placeholder="이름" onChange={e => setName(e.target.value)} value={name}></input>
            <br></br>
            <input type="text" placeholder="나이" onChange={e => setAge(e.target.value)} value={age}></input>
        </>
    )
}

export default HookEffect;