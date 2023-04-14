import './App.css';
import "./css/sb-admin-2.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './credentials/Login';
import Signup from './credentials/Signup';
import Client_portal from './client/Client_portal';
import Freelance_portal from './freelancer/Freelance_portal';
import View_projects from './client/View_projects';
import View_freelancer from './client/View_freelancer';
import Post_project from './client/Post_project';
import All_projects from './freelancer/All_projects';
import View_client from './freelancer/View_client';
import Apply_project from './freelancer/Apply_project';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signUp' element={<Signup/>}/>
      <Route path='/client_portal' element={<Client_portal/>}>
        <Route path='viewProjects/:cId' element={<View_projects/>}/>
        <Route path='viewFreelancers/:cId/:_id' element={<View_freelancer/>}/>
        <Route path='post_Project/:cId' element={<Post_project/>}/>
      </Route>
      <Route path='/freelancer_portal' element={<Freelance_portal/>}>
        <Route path='all_Projects/:fId' element={<All_projects/>}/>
        <Route path='view_Project/:fId/:pId' element={<View_client/>}/>
        <Route path='apply_Project/:fId/:pId' element={<Apply_project/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
