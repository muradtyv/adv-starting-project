
import { useLoaderData } from "react-router-dom";


import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();


  // if(data.isError) {
  //   return <p>{data.message}</p>
  // }


  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {

  // await new Promise(resolve => setTimeout(resolve, 500));

  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
   throw new Response(JSON.stringify({message: "Could not fetch data"}), {status: 500} )
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
