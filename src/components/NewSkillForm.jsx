import './form.css'
import { useState } from 'react'


function SkillListForm({ skills, setSkills }){

    const [newSkill, setNewSkill] = useState({ name: '', level: 1 });

    function handleSubmit(e) {
        e.preventDefault()
        const addingSkill = { ...newSkill }
        const newSkills = [...skills, addingSkill]
        setSkills(newSkills)
        setNewSkill({ name: '', level: 1 });
    }

    return(

            <form className="form" onSubmit={handleSubmit}>
                <label style={{display: "-ms-inline-flexbox"}}>Skill
                    <input 
                        type="text" 
                        placeholder="New Skill" 
                        value={newSkill.name}
                        onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })} 
                    />
                </label>
                <label className="label">Level
                        <select onChange={(e) => setNewSkill({ ...newSkill, level: parseInt(e.target.value) })}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                </label>
                    <button>Add Skill</button>
            </form>
    )
}
export default SkillListForm