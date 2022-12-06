
function Experience(props) {
  const { experience } = props;
  return (
    <div className="Experience">
      <div className="title">Experience</div>
      {
        Object.keys(experience).map(id => (
          <div key={id} className="exp-info">
            <div className="sub-title">{experience[id].from + '-' + experience[id].to}</div>
            <div className="sub-title">{experience[id].position}</div>
            <div className="text">{experience[id].company + ', ' + experience[id].city}</div>
          </div>
        ))
      }
    </div>
  );
}

export default Experience;