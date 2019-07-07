// pages/money/money.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    overage:0,
    ticket:123,
    toCharge:null,
  },
  about(){
    wx.showModal({
      title: '关于ofo',
      content: 'ofo小名叫小黄，是共享单车的一种',
    })
  },
  deposit(){
    wx.showModal({
      title: '押金',
      content: '您有299元押金，可以随时申请退还',
    })
  },
  showTicket(){
    wx.showModal({
      title: '优惠卷',
      content: '您有'+this.data.ticket+'张优惠卷',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.charge){
      // this.setData({
      //   overage: this.data.overage + Number(options.charge)
      // })
    }
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
    wx.getStorage({
      key: 'overage',
      success: (res)=>{
        this.setData({
          overage:Number(res.data)+this.data.overage
        })
        wx.clearStorageSync('overage')
      },
    })
  },
  movetoCharge(){
    wx.navigateTo({
      url: '/pages/charge/charge',
    })
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