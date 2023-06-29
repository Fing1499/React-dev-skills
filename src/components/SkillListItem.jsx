import './SkillListItem.css';


function SkillListItem({ skill, index }){

    return(

            <li className="skill-list-item">
                <h3>{skill.name}</h3>
                <p className="level">Level {skill.level}</p>
            </li>

    )
}
export default SkillListItem