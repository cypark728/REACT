import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='APP'>
      <ul>
        <li>1. JSX문법의 주석 alt + shift + a {/* 주석 */}</li>
        <li>2. 반드시 하나의 태그를 리턴해야 합니다.</li>
        <li>3. 하나를 감싸는 div태그를 사용하기 싫다면 Fragment태그나 <></>를 사용합니다.</li>
        <li>4. 변수의 참조는 {}로 할 수 있습니다.</li>
        <li>5. if구문을 쓰고 싶다면 3항연산자를 씁니다.</li>
        <li>6. 화면에 보여주고 싶은 내용이 없다면 null을 반환하면 됩니다. (undefind를 반환하지 않도록 하는게 좋아요)</li>
        <li style={{color:"red", fontSize: "15px"}}>7. DOM요소에 스타일을 지정하려면 반드시 객체형으로 씁니다.</li>
        <li className='x'>8. 클래스 대신에 className을 사용합니다.</li>
        <li>9. 홀로 사용하는 태그는 반드시 닫는 태그를 작성합니다.</li>
      </ul>
    </div>
  );
}

export default App;
