import { v4 as newId } from "uuid";

import "../../styles/Form.css";
import "../../styles/Section.css";
import "../../styles/InputGroup.css";

function PersonalInput(props) {
  const { updatePersonal } = props;
  const update = (event) => {
    const { name, value } = event.target;
    updatePersonal({ name, value });
  };

  const getImage = (event) => { 
    const { name } = event.target;
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      updatePersonal({ name, value: reader.result })
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      updatePersonal({ name, value: "" });
    }
  };
  
  return (
    <div className="Section">
      <div className="title">Personal Information</div>
      <input name="firstName" placeholder="First name" onChange={update}/>
      <input name="lastName" placeholder="Last name" onChange={update}/>
      <input name="title" placeholder="Title" onChange={update}/>
      <input name="address" placeholder="Address" onChange={update}/>
      <input name="phoneNumber" placeholder="Phone number" onChange={update}/>
      <input name="email" placeholder="Email" onChange={update} />
      <label>Choose Photo<input name="image" type="file" onChange={getImage} /></label>
      <textarea name="description" placeholder="description" onInput={update}/>
    </div>
  );
}

function ExperienceInput(props) {
  const { experience, addExperience,updateExperience, deleteExperience } = props;

  const addExp = () => {
    const id = newId();
    addExperience({id});
  };

  const update = (event) => {
    const { name, value } = event.target;
    updateExperience({ name, value });
  };

  const deleteExp = (event) => {
    const { id } = event.target;
    deleteExperience({ id })
  };

  return (
    <div className="Section">
      <div className="title">Experience</div>
      {
        Object.keys(experience).map((id) => (
          <div key={id} className="Section">
            <input id={id} name="position" placeholder="Position" onChange={update} />
            <input id={id} name="company" placeholder="Company" onChange={update}/>
            <input id={id} name="city" placeholder="City" onChange={update}/>
            <input id={id} name="from" placeholder="From" onChange={update}/>
            <input id={id} name="to" placeholder="To" onChange={update} />
            <button id={id} onClick={deleteExp}>Delete</button>
          </div>))}
      <button onClick={addExp}>Add</button>
    </div>
  );
}

function EducationInput(props) {
  const { education, addEducation,updateEducation, deleteEducation } = props;

  const addEdu = () => {
    const id = newId();
    addEducation({id});
  };

  const update = (event) => {
    const { name, value } = event.target;
    updateEducation({ name, value });
  };

  const deleteEdu = (event) => {
    const { id } = event.target;
    deleteEducation({ id })
  };

  return (
    <div className="Section">
      <div className="title">Education</div>
      {
        Object.keys(education).map((id) => (
          <div key={id} className="Section">
            <input id={id} name="institution" placeholder="Institution" onChange={update} />
            <input id={id} name="city" placeholder="City" onChange={update}/>
            <input id={id} name="degree" placeholder="Degree" onChange={update}/>
            <input id={id} name="subject" placeholder="Subject" onChange={update}/>
            <input id={id} name="from" placeholder="From" onChange={update}/>
            <input id={id} name="to" placeholder="To" onChange={update} />
            <button id={id} onClick={deleteEdu}>Delete</button>
          </div>))}
      <button onClick={addEdu}>Add</button>
    </div>
  );
}

export { PersonalInput, ExperienceInput, EducationInput };