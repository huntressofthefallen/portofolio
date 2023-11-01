import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Chemical Engineering",
    academy: "Universitas Gadjah Mada",
    dec: "Graduated with Bachelor of Engineering title.",
    startYear: "2017",
    endYear: "2022",
  },
  {
    id: 2,
    title: "High School",
    academy: "85 National High School Jakarta",
    dec: "Majoring in Mathematics & Natural Science.",
    startYear: "2014",
    endYear: "2017",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Community & Support Consultant",
    company: "thatgamecompany Inc.",
    dec: "Community & Support Consultant at thatgamecompany, responsible for cultivating thriving online communities, providing exceptional customer support, and ensuring a seamless player experience, while fostering strong connections between players and the company.",
    startYear: "2023",
    endYear: false,
  },
  {
    id: 2,
    title: "Overseas Community Operations Consultant",
    company: "Beijing Fun Plus Technology, Co. Ltd.",
    dec: "Overseas Community Operations Consultant at FunPlus, skilled in international community management, marketing, social media, and brand support. Leveraged expertise in full-stack development, including JavaScript, HTML, and CSS, to create innovative solutions such as Discord bot development and website integration, enhancing the user experience.",
    startYear: "2021",
    endYear: "2023",
  },
  {
    id: 3,
    title: "Process Engineering Intern",
    company: "PT. Kaltim Methanol Industri",
    dec: "Dedicated Process Engineer with a focus on sustainable solutions. Led a project in 2021 at PT. Kaltim Methanol Industri, conducting Life Cycle Assessments and Sensitivity Analyses of energy programs. Leveraged data-driven insights to optimize environmental and energy efficiency in industrial processes.",
    startYear: "2021",
    endYear: "2021",
  },
  {
    id: 4,
    title: "Live Audio Engineer",
    company: "GBI Keluarga Allah Yogyakarta",
    dec: "Experienced Live Audio Engineer with a strong track record of ensuring high-quality sound production and seamless live performances. Proficient in managing sound equipment, troubleshooting technical issues, and delivering exceptional audio experiences for audiences.",
    startYear: "2019",
    endYear: "2021",
  },
  {
    id: 5,
    title: "Business Operation Team",
    company: "Rajawali Indonesia Communication",
    dec: "Business Operation Team at Rajawali Indonesia Communication, dedicated to ensuring smooth and efficient business operations, facilitating growth and success within the organization.",
    startYear: "2018",
    endYear: "2019",
  },
  {
    id: 6,
    title: "Junior System Analyst Intern",
    company: "PT. Satya Amarta Prima",
    dec: "Junior System Analyst Intern at PT. Satya Amarta Prima, contributing to the analysis and improvement of systems, gaining valuable experience in system optimization and development.",
    startYear: "2017",
    endYear: "2017",
  }
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-top" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${educationToggle === education.id ? "opened" : ""
                      }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${educationToggle == education.id ? "active" : ""
                        }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${experience.id == experienceToggle ? "opened" : ""
                      }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${experienceToggle == experience.id ? " active" : ""
                        }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
