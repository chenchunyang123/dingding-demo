Page({
  data: {
    inputValue: '',
    dialogs: [{num: 1, text: 'hello'}, {num: 2, text: '呵呵'}],
  },
  onLoad() {},
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
  onSend() {
    let inputValue = this.data.inputValue;
    let dialogsLength = this.data.dialogs.length;
    this.setData({
      ['dialogs[' + dialogsLength + ']']: {num: 1, text: inputValue},
      inputValue: ''
    })
  }
});
