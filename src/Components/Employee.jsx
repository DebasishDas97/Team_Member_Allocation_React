import Teams from "./Teams"
import TeamMembers from "./TeamMembers"

export default function Employee({employee, selectedTeam, handleTeamSelectionChange, handleEmployeeCardClick}) {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Teams />
          </div>
        </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers employee={employee} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick}/>
          </div>
        </div>
      </div>
    </main >
  )
}