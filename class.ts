import { Login, User } from "./Interface"

class Employee implements Login {
  #id!: number
  name!: string
  address!: string

  get empId(): number {
    return this.#id
  }

  set empId(id: number) {
    this.#id = id
  }
  static getEmployeeCount(): number {
    return 50
  }

  constructor(id: number, name: string, address: string) {
    this.address = address
    this.#id = id
    this.name = name
  }
  Login(): User {
    return { name: "John", id: 1, email: "MyEMAIL" }
  }

  getNameWithAddress(): string {
    return `${this.name} stays at  ${this.address}`
  }
}
// Employee.getEmployeeCount();
let person = new Employee(1, "John", "street no 2")

console.log((person.empId = 100))

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address)
  }
  // getNameWithAddress(): string {
  //   return `${this.name} is manager at ${this.address}`
  // }
}

let Mike = new Manager(1, "Mike", "manger address")

// john.id = 1
// john.name = "john"
// john.address = "street no 1"
console.log(Mike.getNameWithAddress())
let address = person.getNameWithAddress()
console.log(person)
console.log(address)
