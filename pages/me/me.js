import Dialog from '../../components/vant/dialog/dialog';

Page({
  data: {
    hasLogin: false
  },
  login() {
    let _this = this;
    let _hasLogin = _this.data.hasLogin
    _this.setData({
      hasLogin: !_hasLogin
    })
  },
  logout: function() {
    let _this = this;
    let _hasLogin = _this.data.hasLogin
    Dialog.confirm({
      message: '你确定要退出登录吗？'
    }).then(() => {
      _this.setData({
        hasLogin: !_hasLogin
      })
    }).catch(() => {
      // on cancel
    });

  }
})
