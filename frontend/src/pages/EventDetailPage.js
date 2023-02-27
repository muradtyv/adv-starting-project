import { useParams } from "react-router-dom";


function EventDetailPage() {

    const params = useParams();

    return <div>
        <h1>EventDetailPage </h1>
        <p>{params.eventId}</p>
    </div>
}


export default EventDetailPage;