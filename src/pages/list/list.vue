<template>
  <div class="shop-list">
    <div class="search">
      <van-search
        class="v-search"
        placeholder="搜索"
        v-model="searchValue"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="list-warp">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoading">
        <div v-for="item in shopList" :key="item.id" @click="goDetail(item.id)" class="list-item">
          <div class="img">
            <img :src="item.headImage" />
          </div>
          <p class="title">{{item.describe}}</p>
          <p class="other">
            <span class="price">
              ￥<i>{{item.price | getParseInt}}</i>.{{item.price | getFloat}}
            </span>
            <span class="inventory">库存：{{item.numberType == 1 ? '不限量' : item.number}}</span>
          </p>
        </div>
      </van-list>
      <div class="autoFlex"></div>
    </van-pull-refresh>
    <div class="my-history" @click="$router.push('/history')">我的足迹</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data() {
    return {
      isLoading: false,
      searchValue: '',
      shopList: [],
      page: 0,
      total: 0,
      loading: false,
      finished: false,
    };
  },
  components: {},
  methods: {
    onSearch() {
      if (this.searchValue.trim() == '') {
        this.searchValue = '';
        return;
      }
      this.page = 1;
      this.total = 10;
      this.getShopList(1, this.searchValue);
    },
    goDetail(id) {
      this.$router.push({
        name: 'detail',
        params: {
          id,
        },
      });
    },
    getShopList(page = 1, searchVal = '', cb) {
      this.loading = true;
      let params = {
        page,
        search: searchVal,
      };
      this.$http.getShopList(params).then(resp => {
        if (resp && resp.code === 1) {
          let list = resp.data.product;
          this.shopList = page == 1 ? list : this.shopList.concat(list);
          let { total } = resp.data;
          if (this.total >= total) {
            this.finished = true;
          }
        }
        this.loading = false;
        cb && cb();
      });
    },
    onLoading() {
      this.page = this.page + 1;
      this.total = this.total + 10;
      this.getShopList(this.page);
    },
    onRefresh() {
      this.page = 1;
      this.total = 10;
      this.searchValue = '';
      this.getShopList(this.page, this.searchValue, () => {
        this.isLoading = false;
        this.$toast('刷新成功');
      });
    },
  },
};
</script>

<style lang="scss">
.van-list__finished-text {
  background: #f7f8fb;
}
.van-pull-refresh__track {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
<style lang="scss" scoped>
.shop-list {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .search {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 9;
    height: 0.44rem;
    .v-search {
      height: 100%;
      padding: 0 0.2rem;
      padding-bottom: 6px;
    }
  }
  .list-warp {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    .van-list {
      padding: 0 0.11rem;
      background: #f7f8fb;
      .list-item {
        display: inline-block;
        width: 1.72rem;
        height: 2.5rem;
        margin-top: 0.11rem;
        background: #fff;
        border-radius: 5px;
        .img {
          width: 1.72rem;
          height: 1.72rem;
          img {
            width: 100%;
            height: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
        }
        .title {
          margin-top: 7px;
          height: 0.36rem;
          padding: 0 6px;
          font-family: PingFangSC-Regular;
          font-size: 0.13rem;
          color: #000000;
          letter-spacing: 0.24px;
          text-align: justify;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .other {
          margin-top: 9px;
          height: 0.2rem;
          padding: 0 6px;
          display: flex;
          justify-content: space-between;
          .price {
            font-family: Helvetica;
            font-size: 0.12rem;
            color: #fb6f00;
            letter-spacing: 0.22px;
            text-align: justify;
            i {
              font-size: 0.16rem;
              font-weight: bold;
            }
          }
          .inventory {
            font-family: PingFangSC-Regular;
            font-size: 0.12rem;
            color: #909090;
            letter-spacing: 0.22px;
            text-align: justify;
          }
        }
      }
      .list-item:nth-child(odd) {
        margin-right: 5px;
      }
    }
    .autoFlex {
      flex: 1;
      background: #f7f8fb;
    }
  }
}
.my-history {
  position: absolute;
  top: 0.12rem;
  right: 0.2rem;
  font-weight: 400;
  z-index: 5;
}
</style>
