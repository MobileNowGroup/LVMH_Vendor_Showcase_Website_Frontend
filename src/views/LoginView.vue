<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { login} from "@/api/login/index"
import { authStore } from '@/stores/authStore'
const router = useRouter();

let isPassVerify = ref<boolean>(false);
let isPassValid = ref<boolean>(false);
let loginEmail = ref<string>("");
let buttonText = ref<string>("LOGIN");
const verifyEmail = () => {
  if (buttonText.value === "LOGIN") {
    loginEmail.value.length > 0
      ? (isPassVerify.value = true) && (buttonText.value = "EXPLORE")
      : (isPassValid.value = true);
  } else {
    login({email:loginEmail.value}).then((res)=>{
      const { access_token } = res.data
      authStore().saveAssessToken(access_token)
      router.push({ name: "vendorlisting" });
    }).catch((error:any)=>{
      isPassValid.value = true
      isPassVerify.value = false
      console.log('login_err:',error);
    })
  }
};
</script>

<template>
  <main>
    <div class="login">
      <div class="login-box">
        <img class="logo" src="/images/logo.png" alt="" />
        <p class="login-title" v-show="!isPassVerify">
          We need to verify your identity.
        </p>
        <p class="login-title" v-show="isPassVerify">FIND AGENCIES.</p>
        <p class="login-desc" v-show="isPassVerify">
          Elevating LVMH digital services through sharing and transparency.
        </p>
        <!-- docker deploy test  -->
        <div class="login-input-box" v-show="!isPassVerify">
          <input
            class="login-input"
            type="text"
            v-model="loginEmail"
            placeholder="Enter your email address"
            @keydown="
              ($event) => {
                if ($event.key === 'Enter') verifyEmail();
              }
            "
          />
        </div>

        <p class="login-verify-text">
          <span v-show="isPassValid && !isPassVerify">*invaild email</span>
        </p>
        <button class="login-button bg-white" @click="verifyEmail">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.login {
  max-width: 100vw;
  height: 100vh;
  background: url("/images/LVMH_IT_Digita_bg.png") repeat-x;
  object-fit: cover;
  &-box {
    width: max-content;
    padding-top: 20rem; // 改为20
    margin: 0 auto;
    text-align: center;
    .logo {
      margin: 0 auto;
      width: 12.8rem;
      height: 9rem;
    }
  }
  &-title {
    padding-top: 6rem;
    max-width: 30rem;
    color: var(--lvmh-primary-110, #e9eaec);
    font-family: lvmh_regular;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
    text-transform: uppercase;
  }
  &-desc {
    color: var(--lvmh-primary-110, #e9eaec);
    margin-top: 1.2rem;
    font-family: lvmh_regular;
    text-align: left;
    max-width: 30rem;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
  }
  &-input {
    margin: 4rem 0 0;
    width: 100%;
    background: transparent;
    outline: none;
    border-style: none;

    color: white; // 改为白色
    padding-bottom: 8px;
    font-family: avenir_next_text;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &-box {
      border-bottom: 1px solid #e9eaec;
    }
    &::placeholder {
      font-size: 14px;
      font-weight: 600;
      color: #636776;
    }
  }

  &-verify-text {
    margin: 0.8rem 0 2rem;
    color: #f44141;
    width: 100%;
    height: 1.6rem;
    font-family: avenir_next_text;
    text-align: left;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &-button {
    width: 100%;
    height: 4rem;
    font-size: 14px;
    padding: 1rem 4rem;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
  }
}

@media screen and (max-width: 960px) {
  .login {
    &-box {
      padding-top: 9.2rem;
    }
    &-title {
      padding-top: 8rem;
    }
  }
}

/* WebKit browsers */
::-webkit-input-placeholder {
  // color: red;
}
/* Mozilla Firefox */
::-moz-placeholder {
  // color: red;
}
/* internet Explorer */
::-ms-input-placeholder {
  // color: red;
}
</style>
