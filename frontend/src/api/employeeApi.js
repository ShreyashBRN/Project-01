import React from 'react'

const employeeApi = () => {
    const [employees, setEmployees] = useState([
  { id: 1, name: "John Doe", role: "HR Manager", department: "HR" },
  { id: 2, name: "Sarah Smith", role: "Sales Executive", department: "Sales" }
]);

  return (
    <div>employeeApi</div>
  )
}

export default employeeApi