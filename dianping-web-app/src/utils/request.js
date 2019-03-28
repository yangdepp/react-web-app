const headers = new Headers({
  "Accept": "application/json",
  "Content-type": "application/json"
})

let a = {
  headers: headers
}
console.log(a)

//  对网络请求进行封装
function get(url) {
  return fetch(url, {
    methods: "GET",
    headers: headers
  }).then(response => {
    handleResponse(url, response)
  }).catch(err => {
    console.error(`Request failed url = ${url}, message = ${err}`)
    return Promise.reject({ error: { message: "Request failed" } })
  })
}


function post(url, data) {
  return fetch(url, {
    methods: "POST",
    headers: headers,
    body: data
  }).then(response => {
    handleResponse(url, response)
  }).catch(err => {
    console.error(`Request failed url = ${url}, message = ${err}`)
    return Promise.reject({ error: { message: "Request failed" } })
  })
}

//  处理response的函数
function handleResponse(url, response) {
  if (response.status === 200) {
    return response.json()
  } else {
    console.error(`Request failed url = ${url}`)
    return Promise.reject({ error: { message: "Request failed due to server error" } })
  }
}

export { get, post }