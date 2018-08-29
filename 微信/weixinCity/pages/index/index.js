//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {
      wx.showLoading({
          title: '加载中',
      })
  },
  onShow:function(){
      wx.hideLoading();
  },
    toLogs: function (e) {
        wx.navigateTo({
            url: '../logs/logs',
        })
    },
    toshop:(e)=>{
        wx.navigateTo({
            url: '../shop/shop',
        })
    }
})
