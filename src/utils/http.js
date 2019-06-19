import Vue from 'vue'

export function get(param) {
    let { url, query } = param
    let arr = []
    for (const k in query) {
        arr.push(`${k}=${query[k]}`)
    }
    arr.push(`gettime=${new Date().getTime()}`) //添加时间戳
    url = url + '?' + arr.join('&')
    return new Promise((resolve, reject) => {
        Vue.axios.get(url).then((response) => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}