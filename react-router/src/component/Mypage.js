import { Navigate, useNavigate } from "react-router-dom";

function Mypage() {

    const loginYn = false; //로그인이 x

    // 권한에 대한 검사...
    // 첫 랜더링 과정에서 useNavigate는 사용하지 못함
    // const nav = useNavigate();
    // if(!loginYn) {
    //     nav('/');
    // }

    // 렌더링 과정에 권한 검사를 통해서 다른페이지로 보냄.
    // 뒤로가기에 기록을 남기지 않음.
    if(!loginYn) {
        return <Navigate to='/' replace={true}/>
    }

    return (
        <>
            <h3>권한이 있는 사람만 들어올 수 있다.</h3>
        </>
    )
}

export default Mypage;