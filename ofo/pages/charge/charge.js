// pages/charge/charge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindInput(e){
    this.data.money = e.detail.value
  },
  charge(){
    if (!this.data.money){
      wx.showToast({
        title: '请填写金额',
        icon: 'none'
      })
      return
    }
    if (!/^\d+$/.test(this.data.money)){
      wx.showToast({
        title: '充值金额必须为数字',
        icon:'none'
      })
      return
    }
    wx.setStorageSync('overage', this.data.money)
    wx.navigateBack({
      url: '/pages/money/money?charge='+this.data.money,
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