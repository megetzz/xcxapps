// pages/apps/apps.js
// 得到app的实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: ['应用名1', '应用名2']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 调用一个方法获取django后台数据,并且将获取到的内容更新到九宫格
    this.updateMenuData()
  },
  updateMenuData: function() {
    var appnames = this.data
    // 1.去后台获取数据
    wx.request({
      // url: 'http://127.0.0.1:8000/api/v1.0/apps/',
      url: app.globalData.appurl + app.globalData.appv + app.globalData.routeapp,
      success: function(res) {
        // 2.更新数据 
        console.log('chenggong')
        console.log(res.data)
        appnames.setData(res.data)

      },
      fail: function(res) {
        console.log('失败')
        console.log(res.errMsg)
        // console.log(this.url)
      },

    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})