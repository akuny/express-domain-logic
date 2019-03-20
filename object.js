class Person {
  constructor(input = {}) {
    this.loaded = false;
    this.firstName = input.firstName;
    this.lastName = input.lastName;
    this.companyId = input.companyId;
    this.age = input.age;
  }

  getCompany(id) {
    this.company = new Company().read(id);
  }

  read(id) {
    const requestedPerson = personTable.find(obj => {
      return obj.id === id;
    });
    this.firstName = requestedPerson.firstName;
    this.lastName = requestedPerson.lastName;
    this.companyId = requestedPerson.companyId;
    this.age = requestedPerson.age;
    this.getCompany(this.companyId);
    return this;
  }

  canDrink() {
    if (this.age < 21) {
      return false;
    }
    return true;
  }
}

class Company {
  constructor(input = {}) {
    this.name = input.name;
  }

  read(id) {
    const reqComp = companyTable.find(obj => {
      return obj.id === id;
    });
    this.name = reqComp.name;
    return this;
  }
}

let personTable = [
  {
    id: 1,
    firstName: 'Larry',
    lastName: 'Higgins',
    companyId: 1,
    age: 20
  },
  {
    id: 2,
    firstName: 'Johnny',
    lastName: 'Rickles',
    companyId: 1,
    age: 8
  },
  {
    id: 3,
    firstName: 'Ned',
    lastName: 'Wilkins',
    companyId: 1,
    age: 49
  }
];

let companyTable = [
  {
    id: 1,
    name: 'Dynamic Systems Inc.'
  }
];

params = {
  firstName: 'Andy',
  lastName: 'Kuny',
  companyId: 1,
  age: 33
};

let thisPerson = new Person().read(3);

console.log(thisPerson);
