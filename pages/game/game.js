// pages/game/game.
Page({
  data: {
    dialogShow: false,
    buttons: [{ text: "取消" }, { text: "确定" }],
  },
  onShow: function (options) {
    let playerList = wx.getStorageSync("playerList");
    this.setData({
      playerList,
    });
    wx.hideHomeButton();
  },
  checkHistory(e) {
    console.log(e);
    console.log("data-index:", e.currentTarget.dataset["id"]);
    let selectedPlayer = e.currentTarget.dataset["id"];
    wx.navigateTo({
      url: "../history/history?selectedPlayer=" + selectedPlayer,
    });
  },
  onePointWinHandler() {
    wx.navigateTo({
      url: "../onePointWin/onePointWin",
    });
  },
  twoPointsWinHandler() {
    wx.navigateTo({
      url: "../twoPointsWin/twoPointsWin",
    });
  },
  doubleTenWinHandler() {
    wx.navigateTo({
      url: "../doubleTenWin/doubleTenWin",
    });
  },
  doubleTenLoseHandler() {
    wx.navigateTo({
      url: "../doubleTenLose/doubleTenLose",
    });
  },
  restartHandler() {
    // show up warning message
    this.setData({
      dialogShow: true,
    });
  },
  tapDialogButton(e) {
    // check which button is tapped
    if (e.detail.index === 0) {
      this.setData({
        dialogShow: false,
      });
    } else {
      // clean up game data in local storage and redirect back to home page
      wx.setStorageSync("playerList", []);
      wx.redirectTo({
        url: "../index/index",
      });
    }
  },
});
