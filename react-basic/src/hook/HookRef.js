import { useRef, useState } from "react";


function HookRef() {

    const [data, setData] = useState('');

    //특정 태그에 접근하기
    const textRef = useRef(null);
    const handleClick = () => {
        alert(data);
        setData('');
        //코드로 포커싱...
        // console.log(textRef);
        // console.log(textRef.current.value);
        // console.log(textRef.current.type);
        textRef.current.focus();
    }

    return(
        <>
            <h3>useRef훅</h3>
            <input type="text" 
                   onChange={e => setData(e.target.value)} 
                   value={data} 
                   ref={textRef}/>

            <button type="button" onClick={handleClick}>확인</button>
        </>
    )
}

export default HookRef;