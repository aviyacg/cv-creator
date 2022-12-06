import '../styles/App.css';
import Header from './Header';
import { PersonalInput, ExperienceInput, EducationInput } from './Form/Form';
import Preview from './Preview/Preview';
import { useState } from 'react';
import { v4 as newId } from 'uuid';

function App() {
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    phoneNumber: "",
    email: "",
    image: "",
    description: "",
  });

  const updatePersonal = ({ name, value }) => {
    setPersonal({ ...personal, [name]: value });
  };

  const [experience, setExperience] = useState({
    [newId()]: {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  });

  const addExperience = ({ id }) => { 
    if (experience[id]) return;
    const newExp = {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    };
    setExperience({ ...experience, [id]: newExp });
  };

  const updateExperience = ({ id, name, value }) => {
    if (!experience[id]) return;
    setExperience({ ...experience, [id]: { ...experience[id], [name]: value } });
  };

  const deleteExperience = ({ id }) => {
    if (!experience[id]) return;
    const prevExperience = {...experience};
    delete prevExperience[id];
    setExperience({ ...prevExperience });
  };
  
  const [education, setEducation] = useState({
    [newId()]: {
      institution: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  });

  const addEducation = ({ id }) => { 
    if (education[id]) return;
    const newEdu = {
      institution: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    };
    setEducation({ ...education, [id]: newEdu });
  };

  const updateEducation = ({ id, name, value }) => {
    if (!education[id]) return;
    setEducation({ ...education, [id]: { ...education[id], [name]: value } });
  };

  const deleteEducation = ({ id }) => {
    if (!education[id]) return;
    const prevEducation = {...education};
    delete prevEducation[id];
    setEducation({ ...prevEducation });
  };

  return (
    <div className='App'>
      <Header />
      <div className='Form'>
        <PersonalInput
          personal={personal}
          updatePersonal={updatePersonal}
        />
        <ExperienceInput
          experience={experience}
          addExperience={addExperience}
          updateExperience={updateExperience}
          deleteExperience={deleteExperience}
        />
        <EducationInput
          education={education}
          addEducation={addEducation}
          updateEducation={updateEducation}
          deleteEducation={deleteEducation}
        />
      </div>
      <Preview
        personal={personal}
        experience={experience}
        education={education}
      />
    </div>
  );
}

export default App;
