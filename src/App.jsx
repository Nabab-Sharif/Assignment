import {
  createRoutesFromElements,
  createBrowserRouter,
  Route, RouterProvider,
} from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import AddUser from "./components//NewUser/AddUser";
import NewUserDetails from "./components//NewUser/NewUserDetails";




const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/newUsers/:userId" element={<NewUserDetails />} />
        <Route path="/addUser" element={<AddUser />} />
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App