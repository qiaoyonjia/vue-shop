var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/index_list/0/data/1', function (req, res, next) {
  
  res.send({
    code: 0,
    data: {
      topBar:[
        {id:0,label:'推荐'},
        {id:1,label:'大红袍'},
        {id:2,label:'铁观音'},
        {id:3,label:'绿茶'},
        {id:4,label:'普洱'},
        {id:5,label:'茶具'},
        {id:6,label:'花茶'},
      ],
      data: [
        // switer
        {
          id: 1,
          type: 'swiperList',
          data: [
            { id: 0, imgUrl:'./images/swiper1.jpeg'},
            { id: 1, imgUrl:'./images/swiper2.jpeg'},
            { id: 2, imgUrl:'./images/swiper3.jpeg'},
          ]
        },
        // icons
        {
          id: 2,
          type: 'iconsList',
          data: [
            {id: 1,title: '自饮茶',imgUrl: './images/icons1.png'},
            {id: 2,title: '茶具',imgUrl: './images/icons2.png'},
            {id: 3,title: '茶礼盒',imgUrl: './images/icons3.png'},
            {id: 4,title: '领福利',imgUrl: './images/icons4.png'},
            {id: 5,title: '官方验证',imgUrl: './images/icons5.png'},
          ]
        },
        // recommend
        {
          id: 3,
          type: 'recommendList',
          data: [
            {id: 1,name: '铁观音2號250g',content: '核心产区滋味正 ',price: '128',imgUrl: './images/recommend.jpeg'},
            {id: 2,name: '铁观音2號251g',content: '核心产区滋味正 ',price: '139',imgUrl: './images/recommend.jpeg'},
          ]
        },
        // like
        {
          id: 4,
          type: 'likeList',
          data: [
            {id: 1,imgUrl: "./images/like.jpeg",name: "雨前珍稀白茶1号",price: 299},
            {id: 2,imgUrl: "./images/like2.jpeg",name: "雨前珍稀白茶2号",price: 499},
            {id: 3,imgUrl: "./images/like3.jpeg",name: "雨前珍稀白茶3号",price: 399},
          ]
        },
      ]
    }
  });
});

module.exports = router;
