export let getCityList=()=>{
    return new Promise ((resolve,reject)=>{
        wx.request({
            url:'https://mock.jasonandjay.com/mock/5b60184d7a32f77e39e46b23/citys/citylist',
            success:(res)=>{
                resolve(res)
            },
            err:(err)=>{
                reject(err)
            }
        })
    })
}
export let getCityData= () => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: 'https://mock.jasonandjay.com/mock/5b629cc17a32f77e39e46b42/shop/shop',
            success: (res) => {
                resolve(res)
            },
            err: (err) => {
                reject(err)
            }
        })
    })
}