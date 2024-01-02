import {Routes,Route, Navigate} from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import PageLayout from "./Layouts/PageLayout/PageLayout"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import PreLoader from "./components/PreLoader/PreLoader"

function App() {

  return (
    <>
    <PreLoader/>
    <PageLayout>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/auth" element={<AuthPage/>} />
      <Route path="/:username" element={<ProfilePage/>}/>
    </Routes>
    </PageLayout>
    </>
  )
}

export default App
