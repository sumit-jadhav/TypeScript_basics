"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        this.address = address;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
    }
    Login() {
        return { name: "John", id: 1, email: "MyEMAIL" };
    }
    getNameWithAddress() {
        return `${this.name} stays at  ${this.address}`;
    }
}
_Employee_id = new WeakMap();
// Employee.getEmployeeCount();
let person = new Employee(1, "John", "street no 2");
console.log((person.empId = 100));
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let Mike = new Manager(1, "Mike", "manger address");
// john.id = 1
// john.name = "john"
// john.address = "street no 1"
console.log(Mike.getNameWithAddress());
let address = person.getNameWithAddress();
console.log(person);
console.log(address);
