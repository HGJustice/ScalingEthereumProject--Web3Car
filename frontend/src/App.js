import { useAccount } from "@particle-network/connect-react-ui";
import NavBar from "./Components/NavBar.js";
import SearchBar from "./Components/SearchBar.js";
import BookRide from "./Components/BookRide.js";
import CreateUser from "./Components/CreateUser.js";
import AddCar from "./Components/AddCar.js";
import Approve from "./Components/ApproveCoin.js";
import "./Styles/Index.css";

export const App = () => {
  const account = useAccount();

  return (
    <div>
      <NavBar />
      {account && (
        <>
          <div className="App__createUser">
            <CreateUser />
          </div>
          <div className="Add__addCar ">
            <AddCar />
          </div>
          <div className="App__BookRide">
            <BookRide />
          </div>
          <div className="App__searchbar">
            <SearchBar />
          </div>
          <div className="">
            <Approve />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
