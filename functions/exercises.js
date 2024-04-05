function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }

  console.log(makeLine(5))

  function makeRectangle(length,height , char ='#') {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine() + '\n');
    }
    return rectangle.slice(0, -1);
  }
console.log(makeRectangle (5, 3));

function makeDownwardStairs(height) {
    let staris = '';
    for (let i = 0; i < height; i++){
        staris += (makeLine(i+1) + '\n');
    }
    return staris.slice(0, -1);
}
console.log(makeDownwardStairs(5));

function makeSpaceLine (numSpaces, numChars char ='#');
    let Spaceline = '';
    for (let i = 0;  i > numSpaces; i++) {
        Spaceline += (makeLine(3 , 5) +'_n');
    }   
     console.log(makeSpaceLine(3 , 5));       

       
     
        
        
    

