// pages/infos/infos.js
const app = getApp();
import { getMusicList } from '../../utils/net.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      inde:0,
      data:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
          inde:options.index
      })
      this.audio = wx.createInnerAudioContext();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  onShow:function(){
    wx.showLoading({
        title: '加载中',
    })
    getMusicList().then(res=>{
      let data = res.data;
      this.setData({
          data:data[this.data.inde]
      },()=>{
          wx.hideLoading()
          console.log(this.data.data);
      })
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})