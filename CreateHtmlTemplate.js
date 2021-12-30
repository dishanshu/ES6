let james= { id: 1,
    firstName: "James",
    lastName: "Arthur",
    city: "Texas"
    }
    
function detail(person){
    return(`<p> 
    <h1>${person.firstName}</h1>
    <h1>${person.lastName}</h1>
    </p>
    `)
    }
    
  
detail(james)
console.log(detail(james))