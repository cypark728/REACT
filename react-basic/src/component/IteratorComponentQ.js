import { useState } from "react";

/*
이미지 파일은
src또는 public 폴더에 들어가면 됩니다.

1. public폴더 아래에 넣는 경우는 절대경로로 참조하면 됩니다.
2. src폴더 아래에 넣는 경우는
import 이미지명 from '경로명';
*/

function IteratorCompoentQ() {
    const arr = [
        {src : '/img/img1.png', title : '아이폰10', price: 1000},
        {src : '/img/img2.png', title : '아이폰11', price: 2000},
        {src : '/img/img3.png', title : '아이폰12', price: 3000},
        {src : '/img/img4.png', title : '아이폰13', price: 4000},
    ]
    
    const [list, setList] = useState(arr);
    const [img, setImg] = useState('/img/img1.png');

    const handleImg = img => {
        setImg(img);
    }

    const newList = list.map( item => 
        <li key={item.title} style={{listStyle: "none", padding: "10px"}}>
            <img src={item.src} 
                 onDoubleClick={() => handleImg(item.src)}
            />
            <br/>
            상품: {item.title}
            <br/>
            가격: {item.price}원
        </li>
    );

    return (
        <>
            <img src={img} alt="미리보기"/>

            <ul style={{display: "flex"}}>
                {newList}
            </ul>
        </>
    )
}

export default IteratorCompoentQ;