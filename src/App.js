
import './App.css';
import BookCreate from "./component/BookCreate";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
import BookList from "./component/BookList";
import BookEdit from "./component/BookEdit";
import {ToastContainer} from "react-toastify";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/create" element={<BookCreate />} />
            <Route path="/" element={<BookList />} />
            <Route path="/editBook/:id" element={<BookEdit />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </>
  );
}

export default App;
