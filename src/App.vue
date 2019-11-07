<template>
  <div id="app">
    <div class="app-header"
         v-if="$route.meta.title">
      <b-header>
        <router-view></router-view>
      </b-header>
    </div>
    <div class="app-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BHeader from './components/b-header/b-header'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    BHeader
  },
  methods: {
    ...mapMutations(['setUserId', 'setMerId']),
    getParams (data) {
      let userInfo = JSON.parse(data)
      this.setUserId(userInfo.userId)
      this.setMerId(userInfo.merId)
    }
  },
  mounted () {
    let that = this
    window.onload = function () {
      window.getParams = that.getParams
    }
    // setTimeout(() => {
    //   this.setUserId(123)
    //   this.setMerId(456)
    // })
  }
}
</script>

<style lang="scss">
@charset "utf-8";

$rem-base-font-size: 100px;
// UI设计图的分辨率宽度
$UI-width: 375px;
// 需要适配的屏幕宽度
$device-widths: 240px, 320px, 360px, 375px, 384px, 411px, 414px, 424px, 480px,
  540px, 640px, 720px, 750px, 768px, 800px, 980px, 1024px, 1080px, 1152px,
  1366px, 1440px, 2160px;
//根据不同设备的屏幕宽度，定义<html>的基准font-size
@each $current-width in $device-widths {
  @media (min-width: $current-width) {
    html {
      font-size: $current-width * $rem-base-font-size/$UI-width;
    }
  }
}

/* reset */
html {
  -webkit-overflow-scrolling: touch; // 解决IOS默认滑动很卡的情况
  -webkit-user-select: none; // 禁止选择文字
  -webkit-touch-callout: none; // 禁止长按系统默认菜单
  list-style-type: none;
  height: 100%;
  overflow: hidden;
}

body {
  height: 100%;
  /*防止长按出现阴影*/
  -webkit-tap-highlight-color: transparent !important;
  -webkit-touch-callout: none !important;
  -webkit-user-select: none !important;
  overflow: hidden;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* 兼容ios对overflow:auto的支持 */
  // -webkit-overflow-scrolling: touch;
}

input,
select,
textarea,
[contenteditable] {
  font-size: 100%;
  -webkit-user-select: initial;
}

li,
ol {
  list-style: none;
}

i,
em {
  font-style: normal;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: 500;
}

a,
a:hover,
a:visited,
a:active {
  text-decoration: none;
  color: inherit;
  /*防止长按出现阴影*/
  -webkit-tap-highlight-color: transparent !important;
  -webkit-touch-callout: none !important;
  -webkit-user-select: none !important;
}

button {
  /*防止长按出现阴影*/
  -webkit-tap-highlight-color: transparent !important;
  -webkit-touch-callout: none !important;
  -webkit-user-select: none !important;
  outline: none; /* android上防止点击时出现外框 */
  border: 0;
  background: inherit;
  cursor: pointer;
}

input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #909090;
  /* placeholder字体大小  */
  font-size: 0.12rem;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: PingFangSC-Regular, PingFangSC-Semibold, PingFang SC;
  font-size: 0.14rem;
  font-weight: 400;
  color: #000;

  .app-header {
    height: 0.44rem;
    border-bottom: 1px solid #f1f4fb;
  }

  .app-main {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
