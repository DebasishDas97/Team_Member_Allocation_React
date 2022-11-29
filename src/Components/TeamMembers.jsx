import femaleProfile from "../images/femaleProfile.jpg";
import maleProfile from "../images/maleProfile.jpg";
import { useContext } from 'react';
import DataContext from '../Context/DataContext';

export default function TeamMembers() {
  const { employee, selectedTeam, handleEmployeeCardClick } = useContext(DataContext)
  return(
          employee.map(emp => (
              <div className={emp.teamName === selectedTeam ? "card m-2 standout": "card"} key={emp.id} id={emp.id} style={{cursor:"pointer"}}
                onClick={handleEmployeeCardClick}>
                  <img src={emp.gender === "male" ? maleProfile : femaleProfile} alt="femaleProfile" className="card-img-top"/>
                  <div className="card-body">
                  <h5 className="card-title">Full Name: {emp.fullName}</h5>
                  <p className="card-text"><b>Designation: </b>{emp.designation}</p>
                  </div>
              </div>
            ))
  )
}