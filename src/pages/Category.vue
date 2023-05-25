<template>
  <div >
    <div class="menu">
      <div class="menu-left">
        <ul>
          <li class="menu-item" v-for="(menu,index) in menus" :key="index" ref="menuList"
              :class="{current:index === currentIndex}" @click="clickList(index)">
            <p class="text">{{menu.name}}</p>
          </li>
        </ul>
      </div>

      <div class="menu-right" ref="itemList">
        <ul>
          <li class="cate" v-for="(menu,index1) in menus" :key="index1">
            <h4 class="cate-title">{{menu.name}}</h4>
            <ul class="cate-item">
              <li v-for="(item,index2) in menu.sub" :key="index2">
                <a href="#" class="cate-item-wrapper">
                  <router-link class="cote-item-wrapper" :to="{name:'goods_list',params:{category_id:item.id}}">
                    <div class="cate-item-img">
                      <img :src="item.image" alt="">
                    </div>
                    <span>{{item.name}}</span>
                  </router-link>
                </a>
              </li>
            </ul>
          </li>
          <li class="cate-bottom"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import  BScroll from 'better-scroll'
  export default {
    data(){
      return{
        menus:[],
        rightLiTops:[],
        scrollY:0,
      }
    },
    created() {
      this.$indicator.open({
        text:'加载中'
      });
      this.$http.get('category').then(res => {
        this.$indicator.close();
        this.menus = res.data.data;
      })
    },
    methods:{
      clickList(index){
        this.scrollY = this.rightLiTops[index];
        this.rightBscrool.scrollTo(0,-this.scrolly)
      },
      _initBscroll(){
        this.leftBscrool=new BScroll('.menu-left',{
          click:true,
          mouseWheel:true
        });
        this.rightBscrool=new BScroll('.menu-right',{
          click:true,           //点击
          mouseWheel:true,      //滚动
          probeType:3           //拖动
        });
        this.rightBscrool.on("scroll",(pos) => {
          // window.console.log(pos.y)
          this.scrollY = Math.abs(pos.y)
        });
      },
      _initRightHeight(){
        let itemArray = [];
        let top = 0;
        itemArray.push(top);
        let allList = this.$refs.itemList.getElementsByClassName('cate');
        Array.prototype.slice.call(allList).forEach(li => {
          top += li.clientHeight;
          itemArray.push(top);
          this.rightLiTops = itemArray;
        })

        let  bottom = this.$refs.itemList.getElementsByClassName('cate-bottom')[0];
        bottom.style.height = this.$refs.itemList.clientHeight / 1.2 + 'px';
        this.rightLiTops = itemArray;
      },
      _initLeftScroll(index){
          let menu = this.$refs.menuList;
          let el = menu[index];
          this.leftBscrool.scrollToElement(el,300,0,-100);
      }
    },
    watch:{
      menus(){
        this.$nextTick(()=>{
          this._initBscroll();//初始化beter-srcoll
          this._initRightHeight();//初始化每个二级菜单的高度
        })
      }
    },
    computed:{
      currentIndex(){
        const {scrollY,rightLiTops} = this;
        return rightLiTops.findIndex((top,index) => {
          if (index === rightLiTops.length - 2){
            return true
          }
          if (scrollY >= top && scrollY < rightLiTops[index + 1]){
            this._initLeftScroll(index);
            return true
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  .menu {
    display: flex;
    position: absolute;
    text-align: center;
    top: 40px;
    bottom: 50px;
    width: 100%;
    overflow: hidden;
    .menu-left {
      flex: 0 0 80px;
      width: 80px;
      background: #f3f5f7;
      .menu-item {
        height: 54px;
        width: 100%;
        .text {
          width: 100%;
          line-height: 54px;
          margin-bottom: 0;
        }
      }
      .current {
        width: 100%;
        background: #fff;
        .text {
          color: red;
        }
      }
    }
    .menu-right {
      flex: 1;
      background: #fff;
      .cate {
        height: 100%;
        .cate-title {
          margin: 0;
          text-align: left;
          font-size: 14px;
          color: #333;
          font-weight: bold;
          padding: 10px;
        }
        .cate-item {
          padding: 7px 10px 10px;
          display: flex;
          overflow: hidden;
          flex-flow: row wrap;
          li {
            width: 33.3%;
            .cate-item-wrapper {
              .cate-item-img {
                width: 100%;
                img {
                  width: 70px;
                  height: 70px;
                }
              }
              span {
                display: inline-block;
                font-size: 14px;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
</style>

