Page({

  /**
   * 页面的初始数据
   */
    data: {
      // 优选课程列表
      classBanner: [
        {
          "title": "新手柔韧提升计划",
          "img": "01.png"
      },
        {
          "title": "新手柔韧提升计划",
          "img": "02.png"
      },
        {
          "title": "新手柔韧提升计划",
          "img": "03.png"
      },
        {
          "title": "新手柔韧提升计划",
          "img": "04.png"
      },
        {
          "title": "新手柔韧提升计划",
          "img": "05.png"
      },
        {
          "title": "新手柔韧提升计划",
          "img": "06.png"
      }
      ],
      // 精品活动
      activity: [
        {
          title: "减脂塑性",
          img: "ic_figure.png"
      },
        {
          title: "身体调理",
          img: "ic_muse.png"
      },
        {
          title: "气质提升",
          img: "ic_mettle.png"
      },
        {
          title: "减压放松",
          img: "ic_coffee.png"
      },
        {
          title: "孕妇产品",
          img: "ic_pregnant.png"
      },
        {
          title: "零基础导学",
          img: "ic_book.png"
      },
        {
          title: "冥想与音乐",
          img: "ic_flower.png"
      },
        {
          title: "动作库",
          img: "ic_book.png"
      },
        {
          title: "练习精讲",
          img: "ic_video.png"
      },
        {
          title: "更多活动",
          img: "ic_more.png"
      },
      ],
      // 教练风采
      trainers: [
        {
          name: "DJ",
          desc: "瑜伽展现你的美",
          bgImg: "train_bg.png",
          avator: "logo.png"
      },
        {
          name: "小强",
          desc: "一起感受运动的魅力",
          bgImg: "plan_top_bg2.png",
          avator: "ic_action.png"
      },
        {
          name: "阿兰",
          desc: "五年资深yoga私教",
          bgImg: "train_bg02.png",
          avator: "ic_yoga.png"
      }
      ],
      // 会员卡
      memberCards: [
        {
          bgImg: "card_bg.png",
          title: "全身燃脂计划",
          lessonCount: "10",
          level: "2",
          levelDesc: "入门"
      },
        {
          bgImg: "card_bg02.png",
          title: "急速瘦身计划",
          lessonCount: "14",
          level: "3",
          levelDesc: "进阶"
      },
        {
          bgImg: "card_bg03.png",
          title: "双腿线条雕刻计划",
          lessonCount: "5",
          level: "2",
          levelDesc: "入门"
      },
      ]
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setTabBarBadge({
      index: 3,
      text: '1'
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