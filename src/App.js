import SkillList from "./components/SkillList"
import SkillListItem from "./components/SkillListItem"
import NewSkillForm from "./components/NewSkillForm"
import { useState } from "react"
import "./style.css"



function App(){

    const [skills, setSkills] = useState([
        { name: "HTML", level: 5 },
        { name: "CSS", level: 3 },
        { name: "JavaScript", level: 4 },
        { name: "Python", level: 2 },
      ]);

    //   const [skills, setSkill] = useState(true);


    return(
        <div className="app">
            <h1>React Dev Skills</h1>
            <SkillList skills={skills} />
            <hr></hr>
            <NewSkillForm setSkills={setSkills} skills={skills} />
        </div>
    )

}
export default App