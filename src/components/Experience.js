import React from 'react';


const ExperienceForm = () => {
    return (
        <>
            <form>
                <label>
                    <input type="text" name="company" placeholder="Company" />
                </label>

                <label>
                    <input type="text" name="role" placeholder="Role"/>
                </label>

                <label>
                    From
                    <input type="date" name="" placeholder="" />
                </label>

                <label>
                    To
                    <input type="date" name="" placeholder="" />
                </label>
            </form>

        </>
    )
}


export default ExperienceForm;


