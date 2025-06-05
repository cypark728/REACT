import {createSlice} from '@reduxjs/toolkit';

//순수리덕스 = 리듀서를 사용
//리덕스 툴킷 = slice객체를 제공함

const countSlice = createSlice({
    name: 'count', //이름
    initialState: {value: 0}, //state초기값
    reducers: { //첫번째 매개변수에 state를 받고, 두번째 매개변수는 action을 받을 수있음
        increase: (state) => {
            state.value += 1; //리덕스 툴킷에서 state를 바로 변경하더라도 자동으로 처리해줌
        },
        decrease: (state) => {
            state.value -= 1;
        }
    }
});

export const {increase, decrease} = countSlice.actions; //reducers를 반환 - 컴포넌트에서 상태를 변경할 때 사용
export default countSlice.reducer; //store에 등록하게 되는 값









