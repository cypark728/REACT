import EventComponent2 from "./component/EventComponent2";
import EventComponentQ from "./component/EventComponentQ";
import EventComponentQ2 from "./component/EventComponentQ2";
import EventComponent from "./component/EventConponent";

function App() {
    return (
        <>
            {/* EvenetComponentQ2 파일로 생성 */}
            <EventComponentQ2></EventComponentQ2>
            <hr/>
            <EventComponent2></EventComponent2>
            <hr/>
            {/* EvnentComponentQ 파일로 생성 */}
            <EventComponentQ></EventComponentQ>
            <hr/>
            <EventComponent></EventComponent>
        </>
    )
}

export default App;