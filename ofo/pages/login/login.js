// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userHead:'/images/avatar.png',
    userName:"昵称",
    loginBtnText:'点击登录',
    logined:false
  },
  toMoney(){
    wx.navigateTo({
      url: '/pages/money/money',
    })
  },
  login(){
    if(!this.data.logined){
      wx.getUserInfo({
        success:(res)=>{
          this.setData({
            userHead: res.userInfo.avatarUrl,
            userName:res.userInfo.nickName
          })
          this.setData({
            logined:true,
            loginBtnText:"退出登录"
          })
          wx.showToast({
            title: '登录成功',
          })
        }
      })
    }else{
      wx.showModal({
        content: '确认退出?',
        success:(res)=>{
          if(res.confirm){
            this.setData({
              logined: false,
              loginBtnText: "点击登录",
              userHead: '/images/avatar.png',
              userName: "昵称",
            })
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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