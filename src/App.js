import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import Task from './components/Task'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task/:id" element={<Task />} />
    </Routes>
  );
}

export default App;
