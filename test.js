let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints=(arr,subject)=>{
    let value=0;
    let count=0;
    switch (subject){
    case "maths": {
      for (let x of arr){
          if(x.subjects.includes(subject)){
          //console.log(subject,x.name,x.results.maths);
          value=value + x.results.maths;
          //console.log("running Total : ",value);
          ++count;
      }  
       }
      //console.log("Total Count:",count);
      
      break;
      }
     case "science": 
        {
            for (let x of arr){
                if(x.subjects.includes(subject)){
                //console.log(subject,x.name,x.results.science);
                value=value + x.results.science;
                //console.log("running Total : ",value);
                ++count;
            }  
             }
            //console.log("Total Count:",count);
                  break;
        }
        case "art": 
        {
            for (let x of arr){
                if(x.subjects.includes(subject)){
               // console.log(subject,x.name,x.results.art);
                value=value + x.results.art;
                //console.log("running Total : ",value);
                ++count;
            }  
             }
            //console.log("Total Count:",count);
                  break;
        }
        case "cad": 
        {
            for (let x of arr){
                if(x.subjects.includes(subject)){
                value=value + x.results.cad;
              //  console.log(subject,x.name,x.results.cad, "running Total : ",value);
                ++count;
            }  
             }
            //console.log("Total Count:",count);
                  break;
        }
        case "english": 
        {
            for (let x of arr){
                if(x.subjects.includes(subject)){
                value=value + x.results.english;
              //  console.log(subject,x.name,x.results.cad, "running Total : ",value);
                ++count;
            }  
             }
            //console.log("Total Count:",count);
                  break;
        }
      default: {
        console.log("Seriously")
      }     
    }
    return Math.floor(value/count) 
}
let subject = ["maths","science","art","cad","english"] ;
for (let x of subject){
   
//let averageMarks=averagePoints(students,"maths");
  let averageMarks=averagePoints(students,x);
   console.log(`${x} average is ${averageMarks}`);
}
