// Asynchronous Programming

// Async & Await 

// Your order tomato soup
// Meanwhile you continue your convo with a friend 
// RESOLVED - Your server brings you soup 
// REJECTED - No soup today

// const orderSoup = () => console.log('soup is ready')

// console.log('You start the convo with your friend')

// start your request
// setTimeout(orderSoup, 2000) // 1000 ms is 1s
// console.log('Still Speaking')

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)]
    isReady ? resolve('soup is ready') :
      reject('no soup today')
  }, 2000)
})

// console.log(
//   promise1
//     .then(success => console.log({ success }))
//     .catch(error => console.log({ error }))
// )

// RESOLVED - if waiter brings you soup
// tip the waiter
// you pay for soup

//REJECTED - leave a bad review, no tip 


const getSoup = async () => {
  // null / undefined
  const data = { rating: 0, tip: 0, pay: 0, review: 0 }

  try {
    const readySoup = await promise1
    console.log(readySoup)
    data.rating = 5
    data.tip = .2
    data.pay = 10
    data.review = 5
    return data

  } catch (error) {
    console.log(error)
    data.rating = 1
    data.tip = 0
    data.pay = 0
    data.review = 1
    return data
  }
}

getSoup().then(value => console.log(value))


const sum = async (a, b) => a + b
console.log(sum(1, 2).then(value => console.log(value)), 'sum')




// console.log('fetch: ',
//   fetch('https://dog.ceo/api/breeds/image/random') //promise
//     .then(response => response.json()) //promise
//     .then(data => console.log(data))

// )

// Rules for using async /await
// 1. you must create a function
// 2. You must use the keyword async
// 3. Use the word await

const getDog = async () => {
  const url = ('https://dog.ceo/api/breeds/image/random')
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)

}

getDog()
