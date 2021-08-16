const managerCard = (managerArray) => {
    let card = "";
    for (const manager of managerArray) {
      card += `
            <div class="card" style="width: 20rem; height: 15rem; box-shadow: 5px 5px 5px grey;">
                <div class="card-header bg-primary text-white">
                    <h2>${manager.name}</h2>
                    <h5 style="font-style: italic;">Manager🌐</h5>
                    </div>
                <div class="card-body">
                    <p class="card-text" style="font-weight: bold;">
                        ID: ${manager.id}
                    </p>
                    <p class="card-text" style="font-weight: bold;">
                        Email: ${manager.email}
                    </p>
                    <p class="card-text" style="font-weight: bold;">
                        Office: ${manager.officeNumber}
                    </p>
                </div>
            </div>
          `;
    }
    return card;
  };
  
  const engineerCard = (engineerArray) => {
    let card = "";
    for (const engineer of engineerArray) {
      card += `
          <div class="card" style="width: 20rem; height: 15rem; box-shadow: 5px 5px 5px grey;">
            <div class="card-header bg-primary text-white">
                <h2>${engineer.name}</h2>
                <h5 style="font-style: italic;">Engineer🛠</h5>
                </div>
            <div class="card-body">
                <p class="card-text" style="font-weight: bold;">
                    ID: ${engineer.id}
                </p>
                <p class="card-text" style="font-weight: bold;">
                    Email: ${engineer.email}
                </p>
                <p class="card-text" style="font-weight: bold;">
                    GitHub: ${engineer.github}
                </p>
            </div>
            </div>
          `;
    }
    return card;
  };
  
  const internCard = (internArray) => {
    let card = "";
    for (const intern of internArray) {
      card += `
          <div class="card" style="width: 20rem; height: 15rem; box-shadow: 5px 5px 5px grey;">
            <div class="card-header bg-primary text-white">
                <h2>${intern.name}</h2>
                <h5 style="font-style: italic;">Intern📝</h5>
                </div>
            <div class="card-body">
                <p class="card-text" style="font-weight: bold;">
                    ID: ${intern.id}
                </p>
                <p class="card-text" style="font-weight: bold;">
                    Email: ${intern.email}
                </p>
                <p class="card-text" style="font-weight: bold;">
                    School: ${intern.school}
                </p>
            </div>
        </div>
          `;
    }
    return card;
  };
  
  const createHTML = (managerArray, engineerArray, internArray) => {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team</title>
    </head>

    <body>
        <nav class="navbar fixed-top navbar-dark bg-primary">
            <a class="navbar-brand" href="#!" style="font-size: 1.5rem;">My Team</a>
        </nav>

        <main style="margin-top: 5rem; display: flex; gap: 3rem; justify-content: center; flex-wrap: wrap">
            ${managerCard(managerArray)}
            ${engineerCard(engineerArray)}
            ${internCard(internArray)}
        </main>
    </body>
</html>
  `;
  };
  
  module.exports = createHTML;