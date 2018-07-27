//index.js
//获取应用实例
const app = getApp()
import { getMusicList } from '../../utils/net.js';
Page({
  data: {
    list:[]
  },
  onLoad: function () {
   
  },
  onShow:function(){
      wx.showLoading({
          title: '加载中',
      });
      getMusicList().then(res=>{
          let data = res.data;
          console.log(data);
          this.setData({
              list:data
          },()=>{
              wx.hideLoading()
          })
      })
  },
  toInfo:function(e){
      console.log(e.currentTarget.dataset.index);
      wx.navigateTo({
          url: '../infos/infos?index=' + e.currentTarget.dataset.index,
      })
  }
})
