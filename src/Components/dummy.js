let wordArray = [
    "apple",
    "banana",
    "orange",
    "grape",
    "pineapple"
  ];

  let index=[0,1,2,3]

  let arr=[]
  index.map(data=>{
    arr.push(wordArray[data])
  })
  console.log(arr);