const employeeQuestions = [
    {
      type: "input",
      message: "Please enter the team member's name:",
      name: "name",
    },
    {
      type: "list",
      message: "Please enter the team member's role:",
      choices: ["Manager", "Engineer", "Intern"],
      name: "role",
    },
    {
      type: "input",
      message: "Please enter the team member's ID:",
      name: "id",
    },
    {
      type: "input",
      message: "Please enter the team member's email:",
      name: "email",
    },
  ];
  
  const managerQuestions = [
    {
      type: "input",
      message: "Please enter the manager's office number",
      name: "officeNumber",
    },
  ];
  
  const engineerQuestions = [
    {
      type: "input",
      message: "What is the engineer's GitHub user name?",
      name: "github",
    },
  ];
  const internQuestions = [
    {
      type: "input",
      message: "What university / school does the intern attend?",
      name: "school",
    },
  ];
  
  const addNewMemberQuestion = [
    {
      type: "list",
      message: "Would you like to add a new team member?",
      choices: ["Yes", "No"],
      name: "addAnotherMember",
    },
  ];
  
  module.exports = {
    employeeQuestions,
    managerQuestions,
    engineerQuestions,
    internQuestions,
    addNewMemberQuestion,
  };