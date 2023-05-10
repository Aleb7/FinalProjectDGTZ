import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
// import Trips from "./components/Trips/Trips";
// import EditTrip from "./components/TripForm/EditTrip";
// import NewTrip from "./components/TripForm/NewTrip";
// import Users from "./components/Users/Users";
// import NewUser from "./components/UsersForm/NewUser";
// import EditUsers from "./components/UsersForm/EditUsers";



//index element per far annidare due root, quando aprirà "/" riga 12 aprirà anche automaticamente <Home />
function App() {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element ={<Home />}></Route>
                    
                    {/* <Route path="trips" element = {<Trips/>}>
                        <Route path="edit/:id" element={<EditTrip/>}></Route>
                        <Route path="new" element={<NewTrip/>}></Route>
                    </Route>

                    <Route path="users" element = {<Users />}></Route>
                    <Route path="users/new" element = {<NewUser />}></Route>
                    <Route path="users/edit/:id" element={<EditUsers/>}></Route> */}
                    
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
