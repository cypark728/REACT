import {configureStore} from '@reduxjs/toolkit';
import CountReducer from './CountReducer';
import UserReducer from './UserReducer';

//store - 어플리케이션의 상태를 전역적으로 저장하는 객체
//리액트 툴킷의 configureStore가 제공
export const store = configureStore({
    reducer: {
        count: CountReducer, //count key는 컴포넌트에서 사용되는 중요한 key가 됨
        user: UserReducer
    }
});


