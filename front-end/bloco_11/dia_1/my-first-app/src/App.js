import './App.css';

const appointments = ['terapia', 'hh', 'bootcamp'];
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    appointments.map((appointment) => Task(appointment))
  )
}

export default App;
