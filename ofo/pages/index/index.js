Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:'',
    latitude:'',
    windowWidth:'',
    windowHeight:'',
    controls:[],
    markers:[]
  },
  bindcontroltap(e){
    switch(e.controlId){
      case 1:wx.scanCode({
        success:(res)=>{
          wx.request({
            url: 'https://www.easy-mock.com/mock/59098d007a878d73716e966f/ofodata/password',
            data: {},
            method: 'GET', 
            success:(res)=>{
            }
          })
        }
      })
        break
      case 2:this.movetoPosition()
        break
      case 4:wx.navigateTo({
        url: '/pages/warn/warn',
      })
        break
      case 5:wx.navigateTo({
        url: '/pages/login/login',
      })
      default:break
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getLocation(){
    wx.getLocation({
      type:'gcj02',
      success:(res)=>{
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
    })
  },
  onLoad: function (options) {
    const _this = this
    //获取当前位置
    this.getLocation()
    //获取系统信息
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          controls: [
            {
              id: 1,
              iconPath: '/images/use.png',
              position: {
                left: res.windowWidth / 2 - 45,
                top: res.windowHeight - 100,
                width: 90,
                height: 90
              },
              clickable: true
            },
            {
              id:2,
              iconPath:'/images/location.png',
              position: {
                left: 20,
                top: res.windowHeight - 80,
                width: 50,
                height: 50
              },
              clickable: true
            },
            {
              id:3,
              iconPath:'/images/marker.png',
              position:{
                left: res.windowWidth / 2 - 11,
                top: res.windowHeight / 2 - 35,
                width: 22,
                height: 35
              },
              clickable: true
            },
            {
              id: 4,
              iconPath: '/images/warn.png',
              position: {
                width: 50,
                height: 50,
                left: res.windowWidth-70,
                top:res.windowHeight-80
              },
              clickable:true,
            },
            {
              id:5,
              iconPath:'/images/avatar.png',
              clickable:true,
              position:{
                width:40,
                height:40,
                top:res.windowHeight-140,
                left:res.windowWidth-65
              }
            }
          ]
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.movetoPosition()
  },
  movetoPosition(){
    wx.createMapContext('indexMap', this).moveToLocation()
  },
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
    wx.showToast({
      title: '刷新成功',
    })
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
    wx.showToast({
      title: '分享成功',
    })
  }
})