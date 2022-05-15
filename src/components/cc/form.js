import React from "react";
import "./form.css";

// Form Validation
let formvalid = false;

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      associatename: "",
      nameError: null,
      associateid: "",
      assidError: null,
      projectid: "",
      projidError: null,
      check: null,
      location: "",
      locationError: null,
      skills: [],
      skillsError: null,
      ProfileName: "",
      profileError: null,
      comment: "",
      commentError: null,
    };
  }

  render() {
    // handles associate values from input to state object
    const handlerEvent = (e) => {
      let name = e.target.id;
      let value = e.target.value;
      this.setState({ [name]: value }, () => {
        if (name === "associatename") {
          validateName();
        } else if (name === "associateid") {
          validateAsid();
        } else if (name === "projectid") {
          validateId();
        }
      });
      // handleValue(name, value);
    };

    // // validate what type of value is this
    // const handleValue = (name, value) => {
    //   if (name === "associatename") {
    //     validateName();
    //   } else if (name === "associateid") {
    //     state.associateid = value;
    //     validateAsid();
    //   } else if (name === "projectid") {
    //     state.projectid = value;
    //     validateId();
    //   }
    // };

    // validates Associate name
    const validateName = () => {
      const Assname = this.state.associatename;
      const regix = /[^a-zA-z\s]/g;
      const caret = /[\^`\\[\]]/g;
      if (Assname.length === 0) {
        this.setState({
          nameError: "Please enter the Associate Name",
        });
      } else if (Assname.match(regix) || Assname.match(caret)) {
        this.setState({
          nameError: "Accepts Alphabets,space & Min 5 to Max 30 Char",
        });
      } else if (Assname.length < 5 || Assname.length > 30) {
        this.setState({
          nameError: "Accepts Alphabets,space & Min 5 to Max 30 Char",
        });
      } else {
        this.setState({
          nameError: "",
        });
      }
    };

    // Validates AssociateID
    const validateAsid = () => {
      const Assid = this.state.associateid;
      const regix = /[^0-9]/g;
      if (Assid.length === 0) {
        this.setState({
          assidError: "Please enter the Associate id",
        });
      } else if (Assid.length !== 6 || Assid.match(regix)) {
        this.setState({
          assidError: "Invalid Associate Id",
        });
      } else {
        this.setState({
          assidError: "",
        });
      }
    };

    // Validates ProjectID
    const validateId = () => {
      const Projectid = this.state.projectid;
      const regix = /[^0-9a-zA-Z]/g;
      if (Projectid.length === 0) {
        this.setState({
          projidError: "Please enter the Project id",
        });
      } else if (Projectid.length !== 12 || Projectid.match(regix)) {
        this.setState({
          projidError: "Invalid Project Id",
        });
      } else {
        this.setState({
          projidError: "",
        });
      }
    };

    // handles offshore or onshore location
    const handleLocation = (e) => {
      const value = e.target.value;
      this.setState(
        {
          location: value,
        },
        () => {
          validateLocation();
        }
      );
    };
    // validate location

    const validateLocation = () => {
      let Location = this.state.location;
      if (Location.length === 0 || Location === "Select location") {
        this.setState({
          locationError: "Please select the location",
        });
      } else {
        this.setState({
          locationError: "",
        });
      }
    };

    // Handils radio button for locations
    const handleRadio = (e) => {
      this.setState(
        {
          check: e.target.value,
        },
        () => {
          const Check = this.state.check;
          // console.log(Check);
        }
      );
    };

    // validates checkbox count
    const handleskills = (e) => {
      let name = e.target.id;
      let value = e.target.value;
      if (e.target.checked) {
        const str = e.target.value;
        this.setState(
          {
            skills: [...this.state.skills, str],
          },

          () => {
            validateskills();
          }
        );
      } else {
        this.setState(
          {
            skills: this.state.skills.filter((skill) => {
              return skill !== e.target.value;
            }),
          },
          () => {
            validateskills();
          }
        );
      }
    };

    // validate skills in checkbutton
    const validateskills = () => {
      const Skills = this.state.skills;
      if (Skills.length < 5) {
        this.setState({
          skillsError: "Please select Min 5 skills",
        });
      } else {
        this.setState({
          skillsError: "",
        });
      }
    };

    // Handles the profile uppload section
    const handleprofile = (e) => {
      let name = e.target.id;
      let value = e.target.value;
      this.setState(
        {
          ProfileName: value,
        },
        () => {
          let Profile = this.state.ProfileName;
          if (Profile.length === 0) {
            this.setState({
              profileError: "Please upload Profile Picture",
            });
          } else {
            this.setState({
              profileError: "",
            });
          }
        }
      );
    };

    // Handles coment or text area

    const handleComment = (e) => {
      const name = e.target.id;
      const value = e.target.value;
      this.setState(
        {
          comment: value,
        },
        () => {
          let Comment = this.state.comment;
          if (Comment.length === 0) {
            this.setState({
              commentError: "Please Enter Comments",
            });
          } else {
            this.setState({
              commentError: "",
            });
          }
        }
      );
    };
    // validate total form for submit
    const validateForm = (e) => {
      if (
        nameError === "" &&
        assidError === "" &&
        projidError === "" &&
        locationError === "" &&
        skillsError === "" &&
        profileError === "" &&
        commentError === ""
      ) {
        ClearForm();
        alert("FORM SUBMITTED SUXCESSFULY");
      } else {
        validateName();
        validateAsid();
        validateId();
        validateLocation();
        validateskills();
        handleprofile(e);
        handleComment(e);
      }
      e.preventDefault(); 
    };
    const ClearForm = (e) => {
      this.setState(
        {
          associatename: "",
          nameError: null,
          associateid: "",
          assidError: null,
          projectid: "",
          projidError: null,
          check: null,
          location: "",
          locationError: null,
          skills: [],
          skillsError: null,
          ProfileName: "",
          profileError: null,
          comment: "",
          commentError: null,
        },
        () => {}
      );
    };

    const {
      associatename,
      nameError,
      associateid,
      assidError,
      projectid,
      projidError,
      check,
      location,
      locationError,
      skillsError,
      ProfileName,
      profileError,
      comment,
      commentError,
    } = this.state;

    // Skills Array
    const skills = [
      "HTML5,CSS3,JS",
      "Angular 8",
      "Express JS",
      "SASS",
      "React JS",
      "Node JS",
      "ES5,ES6,ES7...",
      "Vue JS",
      "Mango DB",
      "Bootstrap 4",
      "TypeScript",
    ];
    return (
      <div className="col-6 mx-auto p-5 ">
        <div className="Heading text-start col-12 mx-auto d-flex">
          <h1>Form Validation</h1>
          <h1 className="text-danger">*</h1>
        </div>
        <form action="submit">
          {/* Associatename,AssociateId,ProjectId */}
          <div className="inputs">
            <div className="col-12 mx-auto text-start my-4">
              <input
                type={"text"}
                placeholder={"Associate Name"}
                id="associatename"
                className="col-12 form-control py-3"
                value={associatename}
                onChange={handlerEvent}
                onBlur={validateName}
              ></input>
              <small className="assname-small">{nameError}</small>
            </div>
            <div className="col-12 mx-auto text-start my-4">
              <input
                type={"text"}
                placeholder={"Associate Id"}
                id="associateid"
                className="col-12 form-control  py-3"
                value={associateid}
                onChange={handlerEvent}
                onBlur={validateAsid}
              ></input>
              <small className="assid-small"> {assidError}</small>
            </div>
            <div className="col-12 mx-auto text-start my-4">
              <input
                type={"text"}
                placeholder={"Project Id"}
                id="projectid"
                className="col-12 form-control  py-3"
                value={projectid}
                onChange={handlerEvent}
                onBlur={validateId}
              ></input>
              <small className="projid-small">{projidError}</small>
            </div>
          </div>
          {/* Radio Buttons Onshore,Offshore */}
          <div className="radio-buttons col-12 mx-auto text-start  d-flex gap-5 ">
            <div className="OffShore">
              <input
                type="radio"
                id="OffShore"
                name="location"
                value="OffShore"
                onClick={handleRadio}
              />
              <label htmlFor="OffShore">OffShore</label>
            </div>
            <div className="OnShore">
              <input
                type="radio"
                id="OnShore"
                name="location"
                value="OnShore"
                onClick={handleRadio}
              />
              <label htmlFor="OnShore">OnShore</label>
            </div>
          </div>
          {/* Location section */}
          <div
            className="location col-12 mx-auto text-start"
            onBlur={validateLocation}
          >
            {check === null ? (
              <div className="location my-3">
                <select
                  id="location"
                  // style={styles}
                  className="forn-control col-12 py-3"
                >
                  <option defaultValue className="col-12">
                    Select location
                  </option>
                </select>
              </div>
            ) : (
              ""
            )}
            {check === "OffShore" ? (
              <div className="location my-3">
                <select
                  id="location"
                  // style={styles}
                  className="forn-control col-12 py-3"
                  onChange={handleLocation}
                >
                  <option defaultValue className="col-12">
                    Select location
                  </option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Pune">Pune</option>
                  <option value="Kochi">Kochi</option>
                </select>
              </div>
            ) : (
              ""
            )}
            {check === "OnShore" ? (
              <div className="location my-3">
                <select
                  id="location"
                  // style={styles}
                  className="forn-control col-12 py-3"
                  onChange={handleLocation}
                >
                  <option defaultValue className="col-12">
                    Select location
                  </option>
                  <option value="US">United States</option>
                  <option value="nonUS">Non US</option>
                </select>
              </div>
            ) : (
              ""
            )}
            <small className="radio-small">{locationError}</small>
          </div>

          {/*CHECK BOX  */}
          <div className="checkbox-container grid col-12  text-start">
            <div className="row">
              {skills.map((skill) => {
                return (
                  <div className="checkbox text-start col-4 py-3" key={skill}>
                    <input
                      type="checkbox"
                      className="check-box"
                      id={skill}
                      value={skill}
                      onChange={handleskills}
                    />
                    <label htmlFor={skill}>{skill}</label>
                  </div>
                );
              })}
              <small className="checkbtn-small">{skillsError}</small>
            </div>
          </div>

          {/* UPPLOAD PICTURE */}
          <div className="uppload-container col-6  my-3 text-start">
            <div className="file-container d-flex flex-column">
              <label className="Uppload-file">Upload Profile:</label>
              <div className="Custom-file border border-dark">
                <input
                  type="file"
                  className="profile"
                  value={ProfileName}
                  id="file"
                  onChange={handleprofile}
                  onBlur={handleprofile}
                />
              </div>
              <small className="profile-small">{profileError}</small>
            </div>
          </div>

          {/* TEXT AREA */}

          <div className="textarea-container col-12 my-5 text-start">
            <textarea
              id="comment"
              type="text"
              placeholder="Comments"
              rows="5"
              className="col-12"
              value={comment}
              onChange={handleComment}
              onBlur={handleComment}
            ></textarea>
            <small className="Comment-small">{commentError}</small>
          </div>
          {/* Buttons For Submit and Clear */}
          <div className="col-12 mx-auto text-start my-5">
            <button
              className="btn-sm btn-primary"
              type="submit"
              onClick={validateForm}
            >
              Submit
            </button>
            <button
              className="btn-sm btn-danger"
              type="submit"
              onClick={ClearForm}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
