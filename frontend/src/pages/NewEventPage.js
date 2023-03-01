import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
 
  return <EventForm />;
}

export default NewEventPage;

// export async function action({request, params}) {

//     const data = await request.formData();

//     const eventData = {
//         title: data.get("title"),
//         image: data.get("image"),
//         date: data.get("date"),
//         description: data.get("description")
//     }

//     const response = await fetch("http://localhost:8080/events",{
//         method: "POST",
//         headers: {
//             "Content-Type": "aplication/json"
//         },
//         body: JSON.stringify(eventData)
//     })

//     if(!response.ok) {
//         throw json({message: "could not save data"}, {status: 500});
//     }

//     return redirect("/events")

// }
export async function action({ request, params }) {
  try {
    const data = await request.formData();

    const eventData = {
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description"),
    };

    const response = await fetch("http://localhost:8080/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    if(response.status === 422) {
        return response;
    }
  } catch (error) {
    // console.log(error);
  }

  // if (!response.ok) {
  //   throw json({ message: 'Could not save event.' }, { status: 500 });
  // }

  return redirect("/events");
}
