import {Link} from "react-router-dom";

export default function Home(){
    
    return (
        <>
            <h3>홈입니당</h3>

            <ul>
                {/* <a href="/user">이동하기</a> */}

                {/* 쿼리스트링 ?key=value */}
                <Link to="/user?id=ine158&addr=읍내">유저화면</Link>
                <br/>
                <Link to="/info/20">info화면</Link>
            </ul>
        </>
    )
}