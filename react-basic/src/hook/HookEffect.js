import { useEffect, useState } from "react";


function HookEffect() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');


    //uesEffect훅 - 컴포넌트의 생명주기를 다룹니다.
    // useEffect( () => {
    //     console.log('렌더링 이후에 항상 실행 됩니다');
    // })

    // useEffect( () => {
    //    console.log('마운트 이후에 딱 1번 실행 됩니다');
    // }, []);

    // useEffect( () => {
    //     console.log('마운트 이후, 특정 state가 업데이트 된 이후에 실행 됩니다');
    // }, [name]) //name이 바뀌면 effect실행됨 (, 나열가능)


    useEffect( () => {
        console.log('마운트 이후, 특정 state가 업데이트 된 이후에 실행 됩니다 2');
        
        return () => {
            //여기서 사용하는 name은 state가 업데이트 되기 바로 이전값이 나오게 됩니다.
            console.log(`언마운트 이후 동작하게 됩니다. 업데이트 직전값: ${name}`);

        }
    }, [name]);

    //useEffect는 여러개 있어도 상관 없습니다 (독립 시행됩니다)
    // useEffect( () => {
    //     console.log('별도로 실행되는 useEffect!!!!!!!!!!!!!!!!!!!!!');
    // })


    console.log('화면실행 마운트 이전 1');

    return (
        <>
            <h3>useEffect훅</h3>

            <input type="text" placeholder="이름" onChange={ e => setName(e.target.value)} value={name}/>
            <br/>
            <input type="text" placeholder="나이" onChange={ e => setAge(e.target.value)} value={age}/>


        </>
    )
}

export default HookEffect;