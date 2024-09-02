
import SideBar from "./Home/Left/SideBar";
import Chats from "./Home/Right/Chats";
import Logout from "./Home/Left1/Logout";

function App() {
  return (
    <>
      <div className=" flex h-screen">
        <Logout />
        <SideBar />
        <Chats />
      </div>
    </>
  );
}

export default App;
