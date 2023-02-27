import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function EventsRoot() {
  return (
    <div>
      <EventsNavigation />

      <Outlet />
    </div>
  );
}

export default EventsRoot;
