<template>
  <div class="header">
    <button class="back"
            @click="goBack">
      <van-icon name="arrow-left"
                size=".22rem" />
    </button>
    <button class="close"
            @click="close">
      <van-icon name="cross"
                size=".22rem" />
    </button>
    <div class="title">{{$route.meta.title}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
import routes from '@/router/routes'
import { mapGetters } from 'vuex'
export default {
  name: "BHeader",
  data () {
    return {

    }
  },
  components: {},
  methods: {
    ...mapGetters(['getBackToName', 'getProductId']),
    goBack () {
      let id = this.getProductId()
      let name = this.getBackToName()
      this.$router.push({
        name,
        params: {
          id
        }
      })
    },
    close () {
      this.$router.history.push('/shop-management')
    }
  },
  // watch: {
  //   $route: (newVal, oldVal) => {
  //     if (newVal !== oldVal) {
  //       console.log(newVal)
  //     } else {
  //       console.log(123)
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 100%;
  .back {
    position: absolute;
    width: 0.22rem;
    height: 0.22rem;
    top: 0.11rem;
    left: 0.12rem;
  }
  .close {
    position: absolute;
    width: 0.22rem;
    height: 0.22rem;
    top: 0.11rem;
    left: 0.49rem;
  }
  .title {
    width: 1.2rem;
    height: 0.22rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    font-size: 0.16rem;
    font-weight: 600;
    text-align: center;
    color: rgba(0, 0, 0, 1);
  }
  .van-icon {
    display: block;
  }
}
</style>
