import {Route, Routes, useLocation} from "react-router-dom";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Unauthorized from "./components/Unauthorized";
import Home from "./components/Home";
import {AnimatePresence} from "framer-motion";
import Navigation from "./components/Navigation";
import useAuth from "./hooks/useAuth";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import PersistLogin from "./components/PersistLogin";
import RequireAuth from "./components/RequireAuth";
import UserCart from "./components/Usercart";
import UserOrders from "./components/Userorders";
import UserProfile from "./components/UserProfile";

function App() {
    const {auth} = useAuth();
    const location = useLocation();
    return (
        <>
            {!auth?.role?.match("ADMIN") && <Navigation />}
            <AnimatePresence wait >
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Layout />}>
                        {/* public routes */}
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="logout" element={<Logout />} />
                        <Route path="unauthorized" element={<Unauthorized />} />
                        <Route path="products" element={<Products />} />
                        <Route path="/products/:productId" element={<ProductDetail />} />
                        <Route path="/" element={<Home />} />

                        {/* we want to protect these routes */}
                        <Route element={<PersistLogin />}>

                            <Route element={<RequireAuth allowedRoles={["USER"]} />}>
                                <Route path="cart" element={<UserCart />} />
                            </Route>

                            <Route element={<RequireAuth allowedRoles={["USER"]} />}>
                                <Route path="orders" element={<UserOrders />} />
                            </Route>

                            <Route element={<RequireAuth allowedRoles={["USER"]} />}>
                                <Route path="profile" element={<UserProfile />} />
                            </Route>

                        {/*    <Route element={<RequireAuth allowedRoles={["PASSENGER"]} />}>*/}
                        {/*        <Route path="passenger-flights" element={<MyRidesPassenger />} />*/}
                        {/*    </Route>*/}

                        {/*    <Route element={<RequireAuth allowedRoles={["PASSENGER"]} />}>*/}
                        {/*        <Route path="reserve-flight" element={<ReserveFlight />} />*/}
                        {/*    </Route>*/}

                        {/*    <Route element={<RequireAuth allowedRoles={["EMPLOYEE"]} />}>*/}
                        {/*        <Route path="add-flight" element={<Driver />} />*/}
                        {/*    </Route>*/}

                        {/*    <Route element={<RequireAuth allowedRoles={["EMPLOYEE"]} />}>*/}
                        {/*        <Route path="all-flights" element={<MyRidesDriver />} />*/}
                        {/*    </Route>*/}


                        {/*    <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>*/}
                        {/*        <Route path="admin-users" element={<Admin />} />*/}
                        {/*    </Route>*/}

                        {/*    <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>*/}
                        {/*        <Route path="register-employee" element={<AddEmployee />} />*/}
                        {/*    </Route>*/}
                        </Route>

                        {/* catch all */}
                        <Route path="*" element={<Missing />} />
                    </Route>
                </Routes>
            </AnimatePresence>
        </>
      );
}

export default App;
