import React, { useState } from 'react';

import GeneralForm from "./components/General"
import ExperienceForm from "./components/Experience"
import EducationForm from "./components/Education";


const App = () => {
    return (
        <div>
            <h1> Resume Builder </h1>

            <GeneralForm />
            <ExperienceForm />
            <EducationForm />
        </div>
    )
}


export default App;