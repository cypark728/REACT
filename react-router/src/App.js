import axios from 'axios';

function App() {
    //엑시오스 설치
    //npm install axios


    const handleClick = async() => {
        // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        // .then( response => {
        //     console.log(response);
        //     console.log(response.data);
        // })

        //콜백지옥
        //이것은 비동기니까~ ㅎㅎ
        // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        // .then( response => {
        //     console.log(response.data);
        //     console.log(1);
        //     axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
        //     .then( response => {
        //         console.log(response.data);
        //         console.log(2);
        //         axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
        //         .then( response => {
        //             console.log(response.data);
        //             console.log(3);
        //         })
        //     })
        // })


        //규칙3 - 리턴이 프로미스라면 await을 붙이고 then을 생략할 수 있음.
        //장점 - 코드의 간결성
        //정점 - 동기적으로 변하게 됩니다.
        const response = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        console.log(response);

        const response2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
        console.log(response2);

        const response3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
        console.log(response3);

    }

    return (
        <>
            <h3>엑시오스 사용하기</h3>

            <button type="button" onClick={handleClick}>엑시오스로 데이터가져오기</button>
        </>
    )
}

export default App;