import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import './App.css'
import ExpenseTracker from './page/ExpenseTracker'
import ListToDo from './page/ListToDo'
import SignIn from "./page/auth/SignIn"
import SignUp from "./page/auth/SignUp"

function App() {

  console.log("React", import.meta.env.VITE_FIREBASE_API)
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup" element={<SignIn />} />
        </Routes>
        <ExpenseTracker />
        <ListToDo />
      </div>
    </Router>
  )
}

export default App
