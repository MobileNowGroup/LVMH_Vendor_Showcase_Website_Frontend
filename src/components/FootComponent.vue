<script setup lang="ts"></script>
<template>
  <div class="foot">
    <img
      class="logo"
      src="/images/logo.png"
      alt=""
      @loadeddata="
        ($event) => {
          console.log($event);
        }
      "
    />
    <p class="mid lg:ml-[-111px]">
      <span>Principle: Regina</span>
      <span>E-mail: ReginaLVMH@gmail.com</span>
      <span
        >Address: 1266 West Nanjing Road, Jing'an District, Shanghai (Plaza
        66)</span
      >
    </p>
    <p class="right">
      <span>
        <router-link to="policy" class="lg:mr-[42px]"
          >Privacy policy</router-link
        >
      </span>
      <span class="lg:mr-[34px] ping">沪ICP备 ***********号</span>
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
  p.right>span{
    
    color: var(--lvmh-primary-140, #a6a8b1);
    text-align: right;
    font-family: Avenir Next;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  span.ping {
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
      font-size: 12px;
      margin-top: 0.8rem;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    
    span {
      font-size: 12px;
      text-align: center;
      margin: 0 !important;
    }
  }
}
</style>
