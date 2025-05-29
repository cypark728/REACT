import { Fragment } from "react/jsx-runtime";
import './css/App.css'; //일반 css파일
import myStyle from './css/App.module.css'; //모듈css파일


function App() {

    return(
        <Fragment>
            <header className='app-header'>
                <p style={{margin: "0"}}>CSS파일로 디자인하기</p>
            </header>

            <section className={myStyle.appWrap}>
                <div className="title">hello world</div>
            </section>
        </Fragment>
    )
}

export default App;