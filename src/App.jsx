import { HashRouter, Routes, Route } from 'react-router-dom';
import { ProgressBar } from "./ProgressBar.jsx";


function App() {
  return (
    <HashRouter>
      <div className= "App">
        <ProgressBar />
        <Routes>
          <Route path="/" element={<ProgressBar />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App;
