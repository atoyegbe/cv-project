import React from 'react';



const EducationForm = () => {
    return (
        <> 
         <form className="grid grid-cols-2 grid-rows-3 ">

                <input type="text" placeholder="University Name" />

                <input type="text" placeholder="Degree" />

                <input type="date" placeholder="" />

                <input type="date" placeholder="" />

                <textarea  placeholder="Achivements" />
            <button> Submit </button> <button> + Edit </button>
        </form>
        </>
    )
}


export default EducationForm;