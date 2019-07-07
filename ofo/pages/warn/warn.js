// pages/warn/warn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxes:[
      {
        value: '私锁私用',
        checked: false
      },
      {
        value: '车牌缺损',
        checked: false
      },
      {
        value: '轮胎坏了',
        checked: false
      },
      {
        value: '车锁坏了',
        checked: false
      },
      {
        value: '违规乱停',
        checked: false
      },
      {
        value: '密码不对',
        checked: false
      },
      {
        value: '刹车坏了',
        checked: false
      },
      {
        value: '其他故障',
        checked: false
      }
    ],
    imgsUrl:[],
    carNumber:"",
    attach:""
  },
  takeCamera(){
    const _this = this
    let urls = this.data.imgsUrl
    wx.chooseImage({
      count:1,
      success: (res)=>{
        urls.push(res.tempFilePaths[0])
        this.setData({
          imgsUrl: urls
        })
      },
    })
  },
  submit(){
    if(!this.data.carNumber){
      wx.showToast({
        title: '请填写车牌号',
        icon: 'none'
      })
    }else if(!this.data.attach){
      wx.showToast({
        title: '请填写备注',
        icon:'none'
      })
    }else{
      wx.showToast({
        title: '提交成功'
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
    wx.showToast({
      title: '到达底部',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getAttach(e){
    this.data.attach = e.detail.value
  },
  getCarNumber(e){
    this.data.carNumber = e.detail.value
  }
})