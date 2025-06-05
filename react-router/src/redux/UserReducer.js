import { createSlice } from "@reduxjs/toolkit";
//인풋값을 관리하는 리듀서

const userSlice = createSlice({
    name: 'user',
    initialState: {name: ''},
    reducers: { //action이라는 두번째 매개변수에 외부에서 전달받는값이 들어옴
        setName: (state, action) => {
            console.log(action); //액션의 payload속성에 전달됨
            state.name = action.payload;
        }
    }
})

export const {setName} = userSlice.actions;
export default userSlice.reducer;
