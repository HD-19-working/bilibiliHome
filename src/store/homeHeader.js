import { defineStore } from "pinia";

const useHomeHeader = defineStore("homeHeader",{
  state(){
    return{
      game_section_data:{
        game_img_data: [
          {
            img:require('@/static/img/game_section_img1.png'),
            text:'命运-冠位指定(Fate/Go)',
            linkTo:'https://game.bilibili.com/fgo/cp_atlantis/'
          },
          {
            img:require('@/static/img/game_section_img2.png'),
            text:'公主连结Re:Dive',
            linkTo:'https://game.bilibili.com/pcr/sqht/'
          },
          {
            img:require('@/static/img/game_section_img3.png'),
            text:'碧蓝航线',
            linkTo: 'https://game.bilibili.com/blhx/'
          },
          {
            img:require('@/static/img/game_section_img4.png'),
            text:'灰烬战场',
            linkTo: 'https://game.bilibili.com/hjzx/xb/'
          }
        ],
        game_list_data: [
          {
            linkTo:'https://www.biligame.com/detail/?id=102457',
            text:'游戏王：决斗链接'
          },
          {
            linkTo:'https://www.biligame.com/detail/?id=103218',
            text:'使命召唤手游'
          },
          {
            linkTo:'https://www.biligame.com/detail/?id=102914',
            text:'影之刃3'
          },
          {
            linkTo:'https://www.biligame.com/detail/?id=103440',
            text:'天谕'
          },
          {
            linkTo:'https://game.bilibili.com/slsk/',
            text:'狩猎时刻'
          },
          {
            linkTo:'https://www.biligame.com/detail/?id=104296',
            text:'哈利波特：魔法觉醒'
          },
          {
            linkTo:'https://www.biligame.com/detail/?id=104687',
            text:'忘川风华录'
          },
        ],
        expend_data:{
          linkTo:'https://game.bilibili.com/platform/',
          text:'游戏中心'
        }
      },
      streaming_section_data:{
        item1:[
          {
            linkTo:'https://live.bilibili.com/22538424',
            text:'御姐酥软',
            img:require('@/static/img/item1_0.png')
          },
          {
            linkTo:'https://live.bilibili.com/22528847',
            text:'尤乃学姐',
            img:require('@/static/img/item1_2.png')
          },
          {
            linkTo:'https://live.bilibili.com/22618800',
            text:'酸甜芝士',
            img:require('@/static/img/item1_3.png')
          },
          {
            linkTo:'https://live.bilibili.com/11032057',
            text:'念初き',
            img:require('@/static/img/item1_4.png')
          },
          {
            linkTo:'https://live.bilibili.com/22357582',
            text:'沫宝宝Ya',
            img:require('@/static/img/item1_5.png')
          },
          {
            linkTo:'https://live.bilibili.com/22515894',
            text:'宸嫣妹妹',
            img:require('@/static/img/item1_6.png')
          },
        ],
        item2:[
          {
            img:require('@/static/img/item2_1.png'),
            linkTo:'https://www.bilibili.com/blackboard/live/bcg.html'
          }
        ],
        expend_data:{
          linkTo:'https://live.bilibili.com/',
          text:'直播'
        }
      },
      down_load_data:{
        data:{
          linkTo:'https://app.bilibili.com/',
          text:'下载APP'
        },
        img:{
          url:require('@/static/img/phone.png'),
          style:{
            width:'22px',
            height:'22px'
          }
        }
      },
      login_data:{
        data:{
          linkTo:'#',
          text:'登录'
        },
        img:{
          url:require('@/static/img/akari.jpg'),
          style:{
            width:'36px',
            height:'36px',
            borderRadius:'50%',
            overflow:'hidden',
            marginRight:'5px'
          }
        }
      },
      header_img_static:[
        require('@/static/img/header1.png'),
        require('@/static/img/header2.png')
      ],
      header_img_animated:require('@/static/img/header_animation1.png'),
      animated_img:[
        require('@/static/img/header_animation1.png'),
        require('@/static/img/header_animation2.png'),
        require('@/static/img/header_animation3.png')
      ],
      input_placeholder:'生化危机8内容提前泄漏？'
    }
  }
});

export default useHomeHeader;