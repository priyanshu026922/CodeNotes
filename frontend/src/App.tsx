import './App.css'
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Blog } from './pages/Blog';
import { Blogs } from './pages/Blogs';
import { Publish } from './pages/Publish';
import { Toaster } from "react-hot-toast";
import {ProtectedRoute} from "./components/Authentication";

function App() {
 

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <BrowserRouter>
      <Routes>
      <Route path="/"element={<Signin/>}/>
        <Route path ="/signup"element ={<Signup/>}/> 
      <Route path ="/blog/:id"element ={<ProtectedRoute><Blog/></ProtectedRoute>}/>
             <Route path ="/blogs"element ={<ProtectedRoute><Blogs/></ProtectedRoute>}/>
             <Route path ="/publish"element ={<ProtectedRoute><Publish/></ProtectedRoute>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
