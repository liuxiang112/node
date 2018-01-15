function select (list, select) {
  let arr = []
  for(let item of list) {
    for(let food of item.foods) {
      if (food.meat === select) {
        arr.push(item)
        // continue
      }
    }
  }
  return arr
}
const arr = [
  {
    name: 'liu',
    sex: 'male',
    foods: [
      {
        meat: 'red',
        friut: 'apple1'
      },
      {
        meat: 'yellow1',
        friut: 'pear'
      },
      {
        meat: 'blue1',
        friur: 'barana1'
      }
    ]
  },
  {
    name: 'jiang',
    sex: 'female',
    foods: [
      {
        meat: 'red2',
        friut: 'apple2'
      },
      {
        meat: 'yellow2',
        friut: 'pear2'
      },
      {
        meat: 'blue2',
        friur: 'barana2'
      }
    ]
  },
  {
    name: 'wu',
    sex: 'famal',
    foods: [
      {
        meat: 'red',
        friut: 'apple3'
      },
      {
        meat: 'yellow3',
        friut: 'pear3'
      },
      {
        meat: 'blue3',
        friur: 'barana3'
      }
    ]
  }
]
let a = select(arr, 'red')
console.log(a)