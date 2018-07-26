export let getCityList =()=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url: 'https://www.easy-mock.com/mock/5b56d877008bc8159f336325/getmusic_copy/getmusic',
            success:function(res){
                resolve(res.data)
            },err:function(err){
                reject(err)
            }
        })
    })
}