// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { RecoverPassword } from "./pages/RecoverPassword";
import { ChangePassword } from "./pages/ChangePassword";
import { Profile } from "./pages/Profile";
import { CategoryPage } from "./pages/CategoryPage";
import { ContactMe } from "./pages/ContactMe"
import ProductDetail from "./pages/ProductDetail";
import { Message } from "./pages/Message";




export const router = createBrowserRouter(
  createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

    // Root Route: All navigation will start from here.
    <>
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >


        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route index element={<Landing />} />
        <Route path="/home" element={<Home />} />

        <Route index element={<Home />} />
        <Route path="/single/:theId" element={<Single />} />
        <Route path="/demo" element={<Demo />} />

        <Route path="/recoverPassword" element={<RecoverPassword />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/change_password/:token" element={<ChangePassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="category/:categoryName" element={<CategoryPage />} />
        <Route path="contact" element={<ContactMe />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="message/" element={<Message/>} />










      </Route>


    </>
  )
);
