import './form.css'

function SkillListForm(){
    return(

            <form className="form">
                <label style={{display: "-ms-inline-flexbox"}}>Skill<input></input></label>
                <label className="label">Level
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                </label>
                    <button>Add Skill</button>
            </form>
    )
}
export default SkillListForm