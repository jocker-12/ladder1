// pages/detail/detail.js
const app = getApp() 
import {
    getMusicList
} from '../../utils/net'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[]
    },

    onLoad: function (options) {
        
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        wx.showLoading({
            title: '加载中...'
        })
        getMusicList()
        .then(res=>{
            this.setData({
                list: res.songs
            },()=>{
                console.log(this.data.list);
                wx.hideLoading()
            })
        })
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