import { createContext, useState, useEffect } from "react"
import { Data } from "../Components/Data"

const DataContext = createContext({})

export function DataProvider({ children }) {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem("TeamName")) || "TeamB")
  const [employee, setEmployee] = useState(JSON.parse(localStorage.getItem("Employee")) || Data)

  useEffect(() => {
    localStorage.setItem("Employee", JSON.stringify(employee))
  }, [employee])

  useEffect(() => {
    localStorage.setItem("TeamName", JSON.stringify(selectedTeam))
  }, [selectedTeam])

  function handleTeamSelectionChange(e) {
    setTeam(e.target.value)
  }

  function handleEmployeeCardClick(e) {
    const transformedEmployees = employee.map(emp => {
      if (emp.id === +(e.currentTarget.id)) {
        if (emp.teamName === selectedTeam) {
          return { ...emp, teamName: '' }
        } else return { ...emp, teamName: selectedTeam }
      } else return emp
    })
    setEmployee(transformedEmployees)
  }

  return (
    <DataContext.Provider value={{ selectedTeam, setTeam, employee, handleTeamSelectionChange, handleEmployeeCardClick }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext