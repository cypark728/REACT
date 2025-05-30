import { useParams } from "react-router-dom"

export default function Info() {

    const params = useParams()
    const age = params.age;

    return (
        <>
            <h3>정보 페이지 입니다</h3>
            넘어온값: {age}
        </>
    )
}