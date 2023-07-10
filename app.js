// const parson: {
//   name: string
//   age: number
// }
var parson = {
    name: 'yota',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(parson.name);
for (var _i = 0, _a = parson.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
