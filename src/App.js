import SkillList from "./components/SkillList"
import SkillListItem from "./components/SkillListItem"
import NewSkillForm from "./components/NewSkillForm"
import "./style.css"

const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ];

function App(){

    return(
        <div className="app">
            <h1>React Dev Skills</h1>
            <SkillList skills={skills} />
            <hr></hr>
            <NewSkillForm>

            </NewSkillForm>
        </div>
    )

}
export default App