import React from 'react';



const EducationForm = () => {
    return (
        <> 
            <label>
                <input type="text" placeholder="University Name" />
            </label>

            <label>
                <input type="text" placeholder="Degree" />
            </label>

            <label>
                <input type="date" placeholder="" />
            </label>

            <label>
                <input type="date" placeholder="" />
            </label>

            <label>
                <textarea  placeholder="Achivements" />
            </label>
        </>
    )
}


export default EducationForm;