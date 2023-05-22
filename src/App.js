import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Trips from "./components/Trips/Trips";
import EditTrip from "./components/TripForm/EditTrip";
import CardTrip from "./components/Trips/CardTrip";
import NewTrip from "./components/TripForm/NewTrip";
import BookingForm from "./components/TripForm/BookingForm"
import BookedUsers from "./components/TripForm/BookedUsers";
import Users from "./components/Users/Users";
import EditUser from "./components/UserForm/EditUser";
import NewUser from "./components/UserForm/NewUser";




//index element per far annidare due root, quando aprirà "/" riga 12 aprirà anche automaticamente <Home />
function App() {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>

                    <Route path="trips" element={<Trips />}></Route>
                    <Route path="trips/trip/:id" element={<CardTrip />}>
                        <Route path="bookedUsers" element={<BookedUsers />}></Route>
                    </Route>
                    <Route path="trips/update/trip/:id" element={<EditTrip />}></Route>
                    <Route path="trips/new" element={<NewTrip />}></Route>
                    <Route path="trips/trip/:id/users" element={<BookingForm />}></Route>

                    <Route path="users" element={<Users />}></Route>
                    <Route path="users/new" element={<NewUser />}></Route>
                    <Route path="users/update/user/:id" element={<EditUser />}></Route>


                </Route>
            </Routes>
        </Router>
    );
}

export default App;
