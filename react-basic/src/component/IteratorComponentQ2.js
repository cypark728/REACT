import { useState } from "react";

function IteratorComponentQ2() {
    //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

    //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];

    const selectList = select.map( item => 
        <option value={item}>{item}</option>
    );

    const [dataList, setDataList] = useState(data);

    const searchByTeacher = () => {
        let newList = dataList.filter( item => item.teacher === searchData);
        setDataList(newList);
    }

    const newList = dataList.map( item => 
        <li key={item.id}>{item.type}-{item.teacher}</li>
    );

    const [searchData, setSearchData] = useState('');

    
    

    return(
        <>
            <h3>실습</h3>
            Search: 
            <input type="text" 
                   onChange={(e) => setSearchData(e.target.value)} 
                   value={searchData}>
            </input>
            <button type="button" onClick={searchByTeacher}>검색</button>
            <br/>
            과목찾기:  
            <select>
                {selectList}
            </select>
            <ul>
                {newList}
            </ul>
        </>
    )
}

export default IteratorComponentQ2;