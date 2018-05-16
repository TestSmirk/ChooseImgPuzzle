const Puzzle = require("./h5puzzle.js");
Page({
  data: {
    imgPoints: [],
    imgArr: ['../../src/images/quanyecha.jpg', '../../src/images/haidao.jpg', '../../src/images/mingren1.jpg', '../../src/images/qilongzhu1.jpg', '../../src/images/quanye.jpg'],
    imgUrl: '../../src/images/quanyecha.jpg',
    levelArr: [
      {
        id: 2,
        text: '4'
      }
    ],
    WIDTH: 0,
    HEIGHT: 0,
    width: 0,
    height: 0,
    status: false,
    trans: 0,
    currentX: 0,
    currentY: 0,
    currentPX: 0,
    currentPY: 0,
    type0: 4
  },
  onReady() {
    let _this = this;

    new Puzzle(this);
  },
  onLoad(options) {
    console.log(options.temp)
   this.setData({
      imgArr: [options.temp],
      imgUrl: options.temp
    })
  },
  getType(e) {
    this.setData({
      trans: -this.data.WIDTH,
      type0: e.currentTarget.dataset.type
    })
    this.puzzle = new Puzzle(this, {
      type: e.currentTarget.dataset.type
    })
  },
  getUrl(e) {
    this.setData({
      trans: -this.data.WIDTH * 2,
      imgUrl: e.currentTarget.dataset.url
    })
  }
})