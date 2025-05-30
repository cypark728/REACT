import { Outlet, useNavigate } from "react-router-dom";

function Header() {

    const nav = useNavigate();

    return(
        <>
            <header style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                <h3>공통으로 사용하는 헤더입니다.</h3>
                <button type="button" onClick={ () => nav('/')}>홈화면</button>
                <button type="button" onClick={ () => nav('/user')}>유저화면</button>
                <button type="button" onClick={ () => nav(-1)}>뒤로가기</button>
            </header>

            <Outlet/>
        </>
    )
}

export default Header;