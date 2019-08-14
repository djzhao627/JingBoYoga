let wxCharts = require('../../utils/wxcharts.js');
let radarChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 首页被选中的导航索引
    currentIndexNav: 0,
    // 导航栏数据
    navList: [{
        "text": "体质检测",
        "id": 0
      },
      {
        "text": "计划详情",
        "id": 1
      },
    ],
    // 体质数据
    personalData: [{
        "icon": "ic_run.png",
        "name": "身高",
        "value": "175CM"
      },
      {
        "icon": "ic_walk.png",
        "name": "体重",
        "value": "60KG",
        "des": "偏瘦, 需要继续加油哦!"
      },
      {
        "icon": "ic_yoga.png",
        "name": "肌肉量",
        "value": "58KG",
        "des": "赞! 肌肉量十分完美呦!"
      },{
        "icon": "ic_bike.png",
        "name": "BMI",
        "value": "23",
        "des": "根据体脂和肌肉量判定体型"
      },
      {
        "icon": "ic_run.png",
        "name": "体型判定",
        "value": "肌肉型",
      },
      {
        "icon": "ic_walk.png",
        "name": "体脂肪率",
        "value": "12%"
      },
      {
        "icon": "ic_yoga.png",
        "name": "体水分率",
        "value": "50%",
        "des": "需要时刻补充水分哦!"
      },
      {
        "icon": "ic_bike.png",
        "name": "基础代谢率",
        "value": "24%",
        "des": "非常优秀!"
      },
      {
        "icon": "ic_yoga.png",
        "name": "代谢年龄",
        "value": "23年"
      },
      {
        "icon": "ic_bike.png",
        "name": "骨量",
        "value": "3%"
      },
    ]
  },

  // 处理图表点击事件
  touchHandler: function (e) {
    console.log(radarChart.getCurrentDataIndex(e));
  },
  /**
   * 点击导航事件
   */
  activeNav(e) {
    this.setData({
      currentIndexNav: e.target.dataset.index
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
    let windowWidth = 320;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    radarChart = new wxCharts({
      canvasId: 'radarCanvas',
      type: 'radar',
      categories: ['体重', '身高', '体脂肪率', '体水份率', '肌肉量', '基础代谢率', '代谢年数', '骨量'],
      series: [{
        name: '总体预览',
        data: [175, 130, 12, 60, 59, 24, 25, 3]
      }],
      width: windowWidth,
      height: 200,
      extra: {
        radar: {
          max: 200
        }
      }
    });

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