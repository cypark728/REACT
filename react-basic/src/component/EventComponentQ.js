import { useState } from "react";

function EventComponentQ() {

    const [ISD, setISD] = useState('');

    const selectISD = (e) => {
        setISD(e.target.value);
    }

    return (
        <>
            <h3>셀렉트 태그 핸들링(실습)</h3>
            <p>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</p>
            <select onChange={selectISD}>
                <option value={"아이네"}>아이네</option>
                <option value={"징버거"}>징버거</option>
                <option value={"릴파"}>릴파</option>
                <option value={"주르르"}>주르르</option>
                <option value={"고세구"}>고세구</option>
                <option value={"비챤"}>비챤</option>
            </select>
            <h3>선택한 결과</h3>
            <p value={ISD}>{ISD}</p>
        </>
    )
}

export default EventComponentQ;