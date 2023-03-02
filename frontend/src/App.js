import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEventPage from "./pages/EditEventPage";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction
} from "./pages/EventDetailPage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventsRoot from "./pages/EventsRoot";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./pages/Root";
import {action as manupualteAction} from "./components/EventForm";
import { Routes, Route } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <HomePage /> },
//       {
//         path: "events",
//         element: <EventsRoot />,
//         children: [
//           { index: true, element: <EventsPage />, loader: eventsLoader },
//           {
//             path: ":eventId",
//             id: "event-detail",
//             loader: eventDetailLoader,
//             children: [
//               {
//                 index: true,
//                 element: <EventDetailPage />,
//               },
//               { path: "new", element: <NewEventPage /> },
//             ],
//           },
//           { path: ":eventId/edit", element: <EditEventPage /> },
//         ],
//       },
//     ],
//   },
// ]);


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <HomePage /> },
//       {
//         path: "events",
//         element: <EventsRoot />,
//         children: [
//           {
//             index: true,
//             element: <EventsPage />,
//             loader: eventsLoader,
//           },
//           {
//             path: ":eventId",
//             id: "event-detail",
//             loader: eventDetailLoader,
//             children: [
//               {
//                 index: true,
//                 element: <EventDetailPage />,
//               },
//               { path: "edit", element: <EditEventPage /> },
//             ],
//           },
//           { path: "new", element: <NewEventPage />, action: newEventAction },
//         ],
//       },
//     ],
//   },
// ]);


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: 'edit', element: <EditEventPage />, action:manupualteAction },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: manupualteAction },
        ],
      },
    ],
  },
]);


// function App() {
//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={<RootLayout />}
//         fallback={<ErrorPage />}
//       >
//         <Route index element={<HomePage />} />
//         <Route
//           path="events"
//           element={<EventsRoot />}
//         >
//           <Route
//             index
//             element={<EventsPage />}
//             loader={eventsLoader}
//           />
//           <Route
//             path=":eventId"
//             element={<EventDetailPage />}
//             loader={eventDetailLoader}
//             action={deleteEventAction}
//           >
//             <Route
//               index
//               element={<EventDetailPage />}
//               action={deleteEventAction}
//             />
//             <Route
//               path="edit"
//               element={<EditEventPage />}
//               action={manupualteAction}
//             />
//           </Route>
//           <Route
//             path="new"
//             element={<NewEventPage />}
//             action={manupualteAction}
//           />
//         </Route>
//       </Route>
//     </Routes>
//   );
// }

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
