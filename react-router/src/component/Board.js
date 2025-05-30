import { Link, NavLink, Outlet } from "react-router-dom";

function Board() {


    const myStyle = {
        color: 'red',
        backgroundColor: 'green'
    }

    return (
        <>
            <h3>글 화면</h3>

            <ul>
                {/* 
                <li><Link to='/board/1'>첫번째 글</Link></li>
                <li><Link to='/board/2'>두번째 글</Link></li>
                <li><Link to='/board/3'>세번째 글</Link></li>
                */}

                {/* 네비링크는 url주소가 선택한 링크와 같을때 style을 줄수있습니다다 */}
                <li><NavLink to='/board/2' style={ ({isActive}) => isActive ? myStyle : null } >두번째 글</NavLink></li>
                <li><NavLink to='/board/1' style={ ({isActive}) => isActive ? myStyle : null } >첫번째 글</NavLink></li>
                <li><NavLink to='/board/3' style={ ({isActive}) => isActive ? myStyle : null } >세번째 글</NavLink></li>


            </ul>

            <Outlet/>

        </>
    )
}

export default Board;