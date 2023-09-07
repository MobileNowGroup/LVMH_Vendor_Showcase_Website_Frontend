<script setup lang="ts"></script>
<template>
  <div class="foot">
    <img
      class="logo"
      src="../assets/images/logo.png"
      alt=""
      @loadeddata="
        ($event) => {
          console.log($event);
        }
      "
    />
    <p class="mid">
      <span>Principle: Regina</span>
      <span>E-mail: ReginaLVMH@gmail.com</span>
      <span
        >Address: 1266 West Nanjing Road, Jing'an District, Shanghai (Plaza
        66)</span
      >
    </p>
    <p class="right">
      <span>
        <router-link to="policy" class="mr-10">Privacy policy</router-link>
      </span>
      <span class="mr-8">沪ICP备 ***********号</span>
      <span>Copyright@LVMH Digital</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.foot {
  // position: fixed;
  // bottom: 0;
  // width: 100%;
  min-height: 14.4rem;
  padding: 1.1rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #20253b;

  .logo {
    width: 8.1rem;
    height: 5.8rem;
    cursor: pointer;
  }
  p.mid {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #e9eaec;
    font-family: avenir_next_text;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  p.right {
    span:first-child {
      margin-right: 4rem;
    }
  }
  span {
    color: #a6a8b1;
    text-align: center;
    font-family: PingFang SC;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
@media screen and (max-width: 960px) {
  .foot {
    flex-direction: column;
    padding: 4rem 8.9rem 5.2rem;
  }
  .logo {
    margin-bottom: 2.8rem;
  }
  p.mid {
    align-items: center !important;
    span {
      margin-top: 0.8rem;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    span {
      margin: 0 !important;
    }
  }
}
</style>
