<template>
  <div id="app">
    <van-area :area-list="areaList"
              :columns-placeholder="['请选择', '请选择', '请选择']"
              title="地址选择" />
    <router-view />
  </div>
</template>

<script>
import areaList from "@/data/area";
export default {
  name: 'App',
  data () {
    return {
      areaList
    }
  }
}
</script>

<style lang="scss">

@charset "utf-8";
$rem-base-font-size: 100px;
// UI设计图的分辨率宽度
$UI-width: 750px;
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
}

body {
  height: 100%;
  /*防止长按出现阴影*/
  -webkit-tap-highlight-color: transparent !important;
  -webkit-touch-callout: none !important;
  -webkit-user-select: none !important;
}

* {
  padding: 0;
  margin: 0;
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
}
</style>
