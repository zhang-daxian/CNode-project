import Vue from 'vue'

const config = {
    baseURL: 'https://cnodejs.org/api/v1'
}


export function get(param) {
    let { url, query } = param
    let arr = []
    for (const k in query) {
        arr.push(`${k}=${query[k]}`)
    }
    arr.push(`gettime=${new Date().getTime()}`) //添加时间戳
    url = url + '?' + arr.join('&')
    return new Promise((resolve, reject) => {
        Vue.axios.get(url, config).then((response) => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}

export function post (param) {
    const { url, query } = param
    return new Promise((resolve, reject) => {
        Vue.axios.post(url, query || {}, config).then((response) => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}