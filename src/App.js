import './App.css';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
function App() {
  return (
    <>

      <div className='mb-2'>
        <Header />
      </div>

      <div>
        <SideBar />
      </div>

    </>
  );
}

export default App;
