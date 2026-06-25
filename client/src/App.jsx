import { Toaster } from "react-hot-toast"
import Dashboard from "./pages/Dashboard"
import LoginLanding from "./pages/LoginLanding"
import Layout from "./pages/Layout"
import Attendance from "./pages/Attendance"
import Employees from "./pages/Employees"
import Leave from "./pages/Leave"
import Payslip from "./pages/Payslips"
import Setting from "./pages/Setting"
import { Navigate, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import LoginForm from "./components/LoginForm"
function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginLanding />} />
        <Route path="/login/admin" element={<LoginForm role={"admin"} title={"Admin portal"} subtitle={"Sign in to manage the organization"}/>} />
        <Route path="/login/employee" element={<LoginForm role={"employee"} title={"Employee portal"} subtitle={"Sign in to access your account"}/>} />



        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslip" element={<Payslip />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
        <Route path="print/payslip/:id" element={<Setting />} />
        <Route path="*" element={<Navigate to={"/dashboard"} />} />
      </Routes>
    </>
  )
}

export default App
