const findTheOldest = function(people) {
    
    let age = null;
    let oldestAge = 0;
    let oldestPerson = null;
    let yearOfDate = new Date();
      people.forEach((person, index) => {
        if(person.yearOfDeath === undefined) {
            person.yearOfDeath = yearOfDate.getFullYear();
        }

        age = person.yearOfDeath-person.yearOfBirth
        people[index].age = age;       

      })
      people.forEach((person, index) => {
        if (person.age > oldestAge) {
            oldestAge = person.age;
            oldestPerson = people[index];
        }
             
      })
      
      return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
