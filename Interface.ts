export interface User {
  name: string
  age?: number
  id: number
  email: string
}

let { name: userName, email: userLogin }: User = {
  name: "Ram",
  id: 1,
  email: "USER@GMAIL",
}
console.log(userName, userLogin)
// userLogin
// user.name
// user.email

interface Employees extends User {
  salary: number
}

let employees: Employees = { name: "Ram", id: 1, email: "", salary: 10000 }

export interface Login {
  Login(): User
}

let [user1, user2, ...restUser]: Array<User> = [
  { name: "John", id: 1, email: "" },
  { name: "John", id: 2, email: "" },
  { name: "John", id: 3, email: "" },
  { name: "John", id: 4, email: "" },
]

console.log(user1)
console.log(user2)
console.log(restUser)

let result = restUser.filter((user) => user.id > 3)
console.log(result)
