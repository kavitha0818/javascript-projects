
let launchcode = {
    organization : "nonprofit",
    executiveDirector : "Jeff",
    percentageCoolEmployees : 100,
    programsOffered : ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function (num) {
      let output = '';
      if (num % 2 === 0){
        output += 'Launch' ;  
      } if (num % 3 === 0) {
        output +=  'Code';  
      } if (num % 5 === 0) {
        output +=  ' Rocks';
      }
      else if (num % 2 != 0 && num % 3 != 0 && num % 5 != 0){
        return `Rutabagas! That doesn't work.`
      }
      return output.trim()+'!';
    }
}

module.exports = launchcode;

