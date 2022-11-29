import DataContext from "../Context/DataContext"
import {useContext} from "react"

export default function Header() {
  const {selectedTeam, employee} = useContext(DataContext)
  const teamMembersCount = employee.filter(emp => emp.teamName === selectedTeam).length

  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <h1>Team Member Allocation</h1>
          <h3>{selectedTeam} has {teamMembersCount} {teamMembersCount > 1 ? "members" : "member"}</h3>
        </div>
      </div>
    </header>
  )
}