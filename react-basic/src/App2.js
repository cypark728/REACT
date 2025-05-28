import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";
import MyState from "./component/MyState";
import MyStateQ from "./component/MyStateQ";


function App() {
    return (
        <>
            <h3>state</h3>
            <MyState />
            <hr />

            <h3>실습</h3>
            {/* MyStaetQ 컴포넌트에 내용을 작성해보면 됩니다. */}
            <MyStateQ />

            <hr/>

            <h3>props</h3>
            <MyComponent name={"홍길동"} age={20} addr={"서울시"}/>
            <MyComponent name={"주르르"} age={17}/>
            <MyComponent name={"릴파"}/>
            <MyComponent2 />

            <MyComponent3 nick={"우왁굳"} age={36}/>
        </>
    )
}

export default App;