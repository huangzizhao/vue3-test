// interface IWithLength{
//   length: number
// }

// function echoWithArr<T extends IWithLength>(arg: T): T{
//   console.log(arg.length)
//   return arg
// }
// const args = echoWithArr({ length: 10, width: 100 })

// console.log(args);

interface KeyPair<T, U, K>{
  key: T,
  value: U,
  name: K
}

let obj: KeyPair<string, number, string> = { key: '222', value: 2, name: 'allen'}
const num: 2 = 2

interface IName{
  name: string
}
type IPerson = IName & {age: number}
let person: IPerson = {name: 'allen', age: 15}