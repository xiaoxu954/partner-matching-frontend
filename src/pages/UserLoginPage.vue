<script setup lang="ts">

import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios.ts";

const router = useRouter();
const route = useRoute();

const userAccout = ref('');
const userPassword = ref('');


const onSubmit = async () => {
  const res = await myAxios.post('/user/login', {
    userAccount: userAccout.value,
    userPassword: userPassword.value,
  })
  console.log(res, '用户登录');

  if (res.code == 0 && res.data) {
    console.log('登录成功');
    //跳转到之前界面
    const redirectUrl = route.query?.redirect as string ?? '/';
    window.location.href = redirectUrl;
  } else {
    console.log('登录失败');
  }
};
</script>

<template>
  <van-form @submit="onSubmit">

    <div style="text-align: center">
      <van-image
          round
          width="10rem"
          height="10rem"
          src=""
      />

    </div>
    <van-cell-group inset>
      <van-field
          v-model="userAccout"
          name="userAccout"
          label="账户"
          placeholder="账户"
          :rules="[{ required: true, message: '请填写账户' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="userPassword"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>


    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>

</template>

<style scoped>

</style>