import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./redux/CountReducer";
import Child from "./redux/Child";


function App() {

    //redux와 redux toolkit설치
    //npm install redux react-redux
    //npm install @reduxjs/toolkit

    //state를 사용할때 - useSelector
    //state를 업데이트 - dispatcher
    const count = useSelector( state => {
        // console.log(state); //여기서 관리되는 값을 뽑아서 return
        return state.count.value;
    })

    const dispatch = useDispatch()

    return (
        <>
            <h3>리덕스 예제</h3>
            현재카운트: {count}

            <button type="button" onClick={() => dispatch(increase())}>증가</button>
            <button type="button" onClick={() => dispatch(decrease())}>감소</button>

            <Child/>

        </>
    )
}

export default App;