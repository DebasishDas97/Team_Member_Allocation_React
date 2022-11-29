import { useState, useContext } from "react"
import DataContext from '../Context/DataContext';

export default function GroupedTeamMembers() {
  const { employee, selectedTeam, setTeam } = useContext(DataContext);
  const [groupedEmployees, setGroupedData] = useState(
    groupTeamMembers()
  );

  function groupTeamMembers() {
    const teamsMap = employee.reduce((teams, emp) => {
      console.log(teams)
      if (teams.has(emp.teamName)) {
        teams.get(emp.teamName).members.push(emp);
      } else {
        teams.set(emp.teamName, {
          team: emp.teamName,
          members: [emp],
          collapsed: selectedTeam !== emp.teamName
        })
      }

    return teams;
    }, new Map());
    return [...teamsMap.values()];
  }

  function handleTeamClick(e) {
    const transformedGroupData = groupedEmployees.map(groupedData => (
      groupedData.team === e.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData
    ))
    setGroupedData(transformedGroupData)
    setTeam(e.currentTarget.id)
  }

  return (
    <main className="container">
      <h1>Grouped Team Members</h1>
      {
        groupedEmployees.map(item => {
          return (
            <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team Name : {item.team}
              </h4>
              <div className={item.collapsed === true ? "collapse" : ""}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div key={member.id} className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.fullName} </span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}