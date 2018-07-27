export let getMusicList = ()=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url: 'https://www.easy-mock.com/mock/5b2af36ccabcb138f69e8bb6/lianxi/likeMusic',
            success:function(res){
                resolve(res.data)
            },
            err:function(err){
                reject(err);
            }
        })
    })
}