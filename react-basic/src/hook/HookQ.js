import { useEffect, useRef, useState } from "react";

function HookQ() {

    /*
        1. 이 페이지가 mount된 이후에 useEffect사용해서 id태그에 포커싱을 하나 넣어주세요.

        2. id, pw는 동시에 state로 관리합니다.

        3. 로그인 클릭시 두 값 중 하나라도 공백이라면, 공백인 태그에 포커싱을 추가해주세요.

        4. 로그인 클릭시 공백이 아니라면, 경고창으로 id, pw를 출력해주세요.
    */

    const idRef = useRef(null);
    const pwRef = useRef(null);
    const [account, setAccount] = useState({id:'', pw:''});

    useEffect(() => {
        idRef.current.focus();
    },[]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleClick = () => {
        if(idRef.current.value === ''){
            idRef.current.focus();
        }else if(pwRef.current.value === ''){
            pwRef.current.focus();
        }else{
            alert(account.id + "\n"+ account.pw);
        }
    };

    return(
        <>
            <div>
                <input type="text" 
                       name="id"     
                       placeholder="아이디"   
                       ref={idRef}
                       onChange={handleChange}
                       value={account.id}/><br/>
                <input type="password" 
                       name="pw" 
                       placeholder="비밀번호" 
                       ref={pwRef}
                       onChange={handleChange}
                       value={account.pw}/><br/>
                <button type="button" onClick={handleClick}>로그인</button>
            </div>
        </>
    )
}

export default HookQ;
