import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignInUpPage from "./pages/SignInUpPage";
import AUserPage from "./pages/AUserPage";
import BrowseJokesPage from "./pages/BrowseJokesPage";
import AJokePage from "./pages/AJokePage";


// These routes do not match the urls in the back-end

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <SignInUpPage />,
      },
      {
        path: "user/<int:id>/",
        element: <AUserPage />,
      },
      {
        path: "browse-jokes/",
        element: <BrowseJokesPage />,
      },
      {
        path: "joke/<int:id>/",
        element: <AJokePage />
      }
    ],
    errorElement: <NotFoundPage />,
  },
]);
