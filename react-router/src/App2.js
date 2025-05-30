import { useEffect, useState } from "react";

function App() {

    const [data, setData] = useState({userId: '', userName: '', userPw: ''});

    const handleClick = () => {
        fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        .then( response => response.json() )
        .then( data => {
            setData(data);
        })
    }

    //화면에 진입하자마자 데이터를 가져오는 방법
    const [myData, setMyData] = useState({userId: '', userName: '', userPw: ''});

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        .then(response => response.json() )
        .then(data => {
            setMyData(data);
        })
    }, []);

    console.log('이게 왜 되는거지?');

    return (
        <>
            <h3>ajax통신</h3>

            <button type="button" onClick={handleClick}>1.버튼클릭시 ajax통신</button>
            <br/>
            가져온데이터 {data.userId}, {data.userName}, {data.userPw}
            
            <br/>
            화면로딩시에 가져온 데이터 {myData.userId}, {myData.userName}, {myData.userPw}


        </>
    )
}

export default App;