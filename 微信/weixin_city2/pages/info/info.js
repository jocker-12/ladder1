//index.js
//获取应用实例
const app = getApp()
import { getCityList } from '../../utils/net.js'
Page({
    data: {
        list: [],
        data: [],
        index: 0,
        flag: 0
    },
    //事件处理函数

    onLoad: function () {

    },
    onShow: function () {
        wx.showLoading({
            title: '加载中',
        });
        getCityList().then(res => {
            let data = res.data;
            let list = data[0].list;
            console.log(data)
            this.setData({
                data: data,
                list:list
            }, () => {
                wx.hideLoading()
            })
        })
    },
    changeList(e){
        console.log(e.target);
        let index = e.target.dataset.index;
        let list = this.data.data[index].list;
        this.setData({
            flag:index,
            list:list,
            index:index
        })
    },
    changeData(e){
        let ind = e.target.dataset.index;//这是市的下标
        let index = this.data.index;//这是县的下标
        let data = this.data.data;//总数据
        let list = this.data.list;//列表数据
        data[index].list[ind].isCkecked = !data[index].list[ind].isCkecked;
        console.log(data[index].list[ind]);
        data.forEach((item,index)=>{
            let count = 0;
            item.list.forEach((v,i)=>{
                if(v.isCkecked){
                    count++;
                }
            })
            item.count=count;
        })
        this.setData({
            data:data
        })
    },
    toImg(){
        let data = this.data.data;
        let counts = 0;//全部的城市
        let num=0;//去过的省份
        let str ='';
        data.forEach((item, index) => {
            let count = 0;
            if(item.count>0){
                num+=1;
            }
            item.list.forEach((v, i) => {
                if (v.isCkecked) {
                    count++;
                    str+=v.name;
                }
            })
            counts+=count;
        })
        let obj ={num:num,count:counts,str:str}
        wx.setStorage({
            key: 'city',
            data: obj,
        })
        wx.navigateTo({
            url: '../img/img',
        })
    }
})
