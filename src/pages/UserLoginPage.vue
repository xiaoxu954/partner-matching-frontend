<script setup lang="ts">

import {useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios.ts";

const router = useRouter();

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
    router.replace('/')

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
          src="https://img.zcool.cn/community/01d2125e130953a80120a89587d6aa.png@1280w_1l_2o_100sh.png"
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
        提交
      </van-button>
    </div>
  </van-form>

</template>

<style scoped>

</style>