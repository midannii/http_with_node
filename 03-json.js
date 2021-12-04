const fs = require('fs');

fs.readFile('./lec-06-prg-03-json-example.json', 'utf8', (error, jsonFile) => {
    if (error) return console.log(error);
    //console.log(jsonFile);
    //const jsonFile2 = JSON.stringify(jsonFile);
    const jsonData = JSON.parse(jsonFile);
    //console.log(jsonData);
    console.log(jsonData.homeTown);
    console.log(jsonData.active);
    console.log(jsonData.members[1].powers[2]);

});