import React from 'react';


const ExperienceForm = () => {
    return (
        <>
            <form className="grid grid-cols-2 grid-row-3">
                <label>
                    Company
                    <input type="text" name="company" placeholder="Company" />
                </label>

                <label>
                    Role:
                    <input type="text" name="role" placeholder="Role"/>
                </label>

                <label>
                    From:
                    <input type="date" name="" placeholder="" />
                </label>

                <label>
                    To:
                    <input type="date" name="" placeholder="" />
                </label>

                <button> Submit </button> <button> + Add Experience </button>
            </form>

        </>
    )
}


export default ExperienceForm;


