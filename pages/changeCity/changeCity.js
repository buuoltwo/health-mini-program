// pages/changeCity/changeCity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:'北京',
    chapters:[
      '北京',
      '上海',
      '广州',
      '深圳',
      '厦门',
      '杭州',
      '青岛',
      '重庆',
      '成都',
      '天津',
      '大理',
      '香港'
    ],
    position:null,
  },
  location() {
    wx.getLocation({
      success: (res) => {
        console.log(res)
        let latitude = res.latitude
        let longitude = res.longitude
        wx.request({
          url: 'http://iwenwiki.com:3002/api/lbs/location',
          data: {
            latitude,
            longitude
          },
          success: result => {
            console.log(result)
            result.data.result.address
            result.data.result.formatted_addresses
          }
        })
      }
     })
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