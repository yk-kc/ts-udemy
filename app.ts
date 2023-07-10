// const parson: {
//   name: string
//   age: number
// }
const parson = {
  name: 'yota',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
}

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(parson.name)

for (const hobby of parson.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map())
}
