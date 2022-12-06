
function Education(props) {
  const { education } = props;
  return (
    <div className="Education">
      <div className="title">Education</div>
      {
        Object.keys(education).map(id => (
          <div key={id} className="edu-info">
            <div className="sub-title">{education[id].from + '-' + education[id].to}</div>
            <div className="sub-title">{education[id].institution + ', ' + education[id].city}</div>
            <div className="text">{'Degree: ' + education[id].degree}</div>
            <div className="text">{'Subject: ' + education[id].subject}</div>
          </div>
        ))
      }
    </div>
  );
}

export default Education;