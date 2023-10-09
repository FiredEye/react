import { Routes,Route } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Route>
    </Routes>
  )
}

export default App