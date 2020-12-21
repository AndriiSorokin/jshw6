import users from "./users.js";

// task 1
const getUserNames = users => {
  const result = users.map((user) => user.name)
  return result
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// task 2
const getUsersWithEyeColor = (users, color) => {
  const result = users.filter((user) => user.eyeColor === color)
  return result
};
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// task 3
const getUsersWithGender = (users, gender) => {
  const result = users.filter((user) => user.gender === gender).map((user) => user.name)
  return result
};
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// task4
const getInactiveUsers = users => {
  const result = users.filter((user) => !user.isActive)
  return result
};
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// task5
const getUserWithEmail = (users, email) => {
  const result = users.find((user) => user.email === email)
  return result
};
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// task6
const getUsersWithAge = (users, min, max) => {
  const result = users.filter((user) => user.age > min && user.age < max)
  return result
};
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// task7
const calculateTotalBalance = users => {
  const result = users.reduce((total, user) => total + user.balance,0)
  return result
};
console.log(calculateTotalBalance(users)); // 20916

// task8
const getUsersWithFriend = (users, friendName) => {
   const result = users.filter((user) => user.friends.includes(friendName)).map((user) => user.name)
  return result
};
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// task9
const getNamesSortedByFriendsCount = users => {
  const result = users.sort((a, b) => a.friends - b.friends).map((user)=> user.name)
  return result
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// task10
const getSortedUniqueSkills = (users) => {
  return users.reduce((arr, user) => {
      arr.push(...user.skills);
      return arr;
    }, []).sort().filter((user, index,arr) => arr.indexOf(user) === index)
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
