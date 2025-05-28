import { useState } from "react";

function IteratorComponent2() {

    const [data, setData] = useState(''); //인풋태그 state

    //화면에 뿌려질 가짜데이터를 생성, 이 데이터를 state로 관리
    const arr = [
        {id: 1, todo: 'hello'},
        {id: 2, todo: 'bye'},
        {id: 3, todo: 'say good bye'}
    ]

    const [list, setList] = useState(arr); //목록 state

    const handleRemove = id => {
        // console.log("remove operater", id);
        // filter - return true인 값으로 필터링 됨
        let newList = list.filter( item => item.id !== id);
        setList(newList);
    }

    //이벤트 연결하는 방법
    //1. onClick={함수명}
    //2. onClick={ () => 함수명()}
    const newList = list.map( item => 
        <li key={item.id}
            onDoubleClick={() => handleRemove(item.id)}
            >
            {item.todo}
        </li>
        )
    

    const handleClick = e => {
        //배열합치기
        let obj = {id: list[list.length - 1].id + 1 , todo: data};
        let newObj = list.concat(obj); 
        //state체인지
        setList(newObj);
        setData(''); 
    }

    return (
        <>
            <h3>할일 목록 만들어보기</h3>

            <input type="text" onChange={ (e) => setData(e.target.value) } value={data}/>
            <button type="button" onClick={handleClick}>목록 추가하기</button>

            <ul>
                {newList}
            </ul>
        </>
    )
   
}

export default IteratorComponent2;