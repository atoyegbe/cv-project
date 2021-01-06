import React, { useState } from 'react';

import GeneralForm from "./components/General"
import ExperienceForm from "./components/Experience"
import EducationForm from "./components/Education";


const App = () => {
    return (
        <>
            <h1 className=""> CV-PROJECT </h1>
        <div className="border-solid p-5 border-8 border-black m-8 gap-4">
            <GeneralForm />
            <ExperienceForm />
            <EducationForm />
            <a href="../public/index.html" download> Download as pdf</a>
        </div>

        </>
    )
}


export default App;