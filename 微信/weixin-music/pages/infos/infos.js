// pages/detail/detail.js
const app = getApp();
import { getMusicList} from '../../utils/net.js';
const innerAudioContext = wx.createInnerAudioContext();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        info:{},
        allList:[],
        index:0,
        start:'',//开始时间
        end:'',//结束时间
        time:'',//暂停的时间
        winth:80//进度条宽度百分比 开始时间/总时间
    },

    onLoad: function (options) {
        console.log('options...', options);
        this.data.index = options.index*1||this.data.index;
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        wx.showLoading({
            title: '加载中',
        })
        getMusicList().then((res)=>{
            this.setData({
                allList:res.songs,
                info:res.songs[this.data.index]
            },()=>{
                console.log(this.data.allList,this.data.info);
                wx.hideLoading();
                this.setMusic();
            })
        })
    },
    setMusic(){
        let music = innerAudioContext;
        music.src = this.data.info.src;
        music.play();
        console.log(music.startTime, music.duration, music.currentTime);
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