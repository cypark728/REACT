

function MyComponent({name, age = 17, addr = "부산시"}) {

    // const {name, age}  = a;

    return (
        <div>
            <p>이름은 {name}이고, 나이는 {age}이다.</p>
            <p>지역은 {addr}입니다.</p>
            <img src="/logo192.png" alt="이미지" width={100}/>
        </div>
    )
}



export default MyComponent