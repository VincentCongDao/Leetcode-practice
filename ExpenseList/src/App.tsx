import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import './App.css'
import Navbar from "./components/navbar/Navbar"
import ExpenseTracker from './page/ExpenseTracker'
import ListToDo from './page/ListToDo'
import SignIn from "./page/auth/SignIn"
import SignUp from "./page/auth/SignUp"

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <ExpenseTracker />
        <ListToDo />
      </div>
    </Router>
  )
}

export default App
