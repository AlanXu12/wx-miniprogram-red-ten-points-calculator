Component({
  properties: {
    formTitle: {
      type: String,
      value: "",
    },
    point: {
      type: Number,
      value: 0,
    },
  },
  data: {
    errorDialogShow: false,
    buttons: [{ text: "确定" }],
    checked: false,
    isDoublePoints: false,
    selectedList: [],
    restPoint: 0,
  },
  attached() {
    console.log("attached() called");
    // prepare data needed for PointsAddingForm component
    let playerList = wx.getStorageSync("playerList");
    let restPoint = 0;
    let maxSelectionNum = 0;
    if (this.data.point === 12) {
      maxSelectionNum = 1;
      restPoint = -4;
    } else if (this.data.point === -12) {
      maxSelectionNum = 1;
      restPoint = 4;
    } else if (this.data.point === 1) {
      maxSelectionNum = 2;
      restPoint = -1;
    } else if (this.data.point === 2) {
      maxSelectionNum = 2;
      restPoint = -2;
    } else {
      console.log("INVALID POINT FOR PointsAddingForm COMPONENT");
    }
    const errorMsg =
      this.data.formTitle + "必须只选" + maxSelectionNum.toString() + "人";
    this.setData({
      playerList,
      maxSelectionNum,
      restPoint,
      errorMsg,
    });
    console.log(this.data);
  },
  methods: {
    // error pop-up dialog OK button handler
    tapDialogButton(e) {
      // dismiss error pop-up and reset selection
      this.setData({
        errorDialogShow: false,
        checked: false,
        isDoublePoints: false,
      });
      // this.onLoad();
    },

    // record the result of this round of game
    winConfirmHandler(e) {
      // check if the count of selection is valid
      if (this.data.selectedList.length !== this.data.maxSelectionNum) {
        // raise error pop-up dialog
        this.setData({
          errorDialogShow: true,
        });
        return;
      }
      // update players' point histories
      let playerList = this.data.playerList;
      playerList.forEach((player) => {
        // check if the current player is selected
        if (this.data.selectedList.includes(player.id.toString())) {
          player.pointHistory.push(
            this.data.isDoublePoints ? 2 * this.data.point : this.data.point
          );
        } else {
          player.pointHistory.push(
            this.data.isDoublePoints
              ? 2 * this.data.restPoint
              : this.data.restPoint
          );
        }
      });
      // update players' current total points
      playerList.forEach((player) => {
        player.curTotal = player.pointHistory.reduce((a, b) => a + b, 0);
      });
      // store the changes both in this page and in local storage
      this.setData({
        playerList,
      });
      wx.setStorageSync("playerList", playerList);
      wx.showToast({
        title: "分数记录成功",
        icon: "success",
        duration: 1500,
        mask: true,
      });

      // navigate to game page
      setTimeout(function () {
        wx.navigateBack();
      }, 1500);
    },

    // double points checkbox select handler
    doublePointsHandler(e) {
      this.setData({
        isDoublePoints: !this.data.isDoublePoints,
      });
    },

    // record the selection
    winnerSelectHandler(e) {
      // check selection count
      if (e.detail.value.length > this.data.maxSelectionNum) {
        // raise error pop-up dialog
        this.setData({
          errorDialogShow: true,
        });
      } else {
        this.setData({
          selectedList: e.detail.value,
        });
      }
      console.log("current selectedList:", this.data.selectedList);
    },
  },
});
