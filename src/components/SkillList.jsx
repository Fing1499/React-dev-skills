import SkillListItem from "./SkillListItem"
import './SkillList.css';

function SkillList({ skills }){

    const skillListItems = skills.map((s, idx) => <SkillListItem skill={s} index={idx} key={idx} />)

    return(

            <ul className="skill-list">
                {skillListItems}
            </ul>      
    )
}
export default SkillList