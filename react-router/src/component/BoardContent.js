import { useParams } from "react-router-dom";

function BoardContent() {

    const param = useParams();

    return(
        <>
            <h3>글 상세화면</h3>

            {param.bno} 입니다.
        </>
    )
}

export default BoardContent;