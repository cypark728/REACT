import { useState } from "react";

function EventComponentQ2 () {

    const [data, setData] = useState('');
    const [data2, setData2] = useState('');

    const dataHandle = (e) => {
        setData(e.target.value);
    }

    const dataView = () => {
        setData('');
        setData2(data);
    }

    return (
        <>
            <h3>인풋데이터 핸들링(실습)</h3>
            <p>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</p>
            <input type="text" name="data" onChange={dataHandle}/>
            <button type="button" onClick={dataView}>추가하기</button>
            <h3>결과</h3>
            <p>{data2}</p>
        </>
    )
}

export default EventComponentQ2;