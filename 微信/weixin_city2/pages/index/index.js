//index.js
//获取应用实例
const app = getApp()
import {getCityList} from '../../utils/net.js'
Page({
  data: {
   list:[],
   data:[],
   index:0,
   flag:0
  },
  //事件处理函数
 
  onLoad: function () {
  
  },
  toInfo: function(e) {
     wx.navigateTo({
         url: '../info/info',
     })
  }
})
