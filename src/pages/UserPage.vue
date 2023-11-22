<script setup lang="ts" xmlns:text-align="http://www.w3.org/1999/xhtml">

import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user.ts";


const user = ref();
const router = useRouter();

onMounted(async () => {
  user.value = await getCurrentUser();
})


const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}


</script>

<template v-if="user">

  <van-image
      round
      width="10rem"
      height="10rem"
      :src="user?.avatarUrl"
      position="center"
  />

  <van-cell title="头像" is-link to="/user/edit">
    <img style="height: 48px" :src="user?.avatarUrl"/>
  </van-cell>
  <van-cell title="当前用户" :value="user?.username"/>
  <van-cell title="账号" :value="user?.userAccount"/>
  <van-cell title="性别" :value="user?.gender"/>
  <van-cell title="电话" :value="user?.phone"/>
  <van-cell title="邮箱" :value="user?.email"/>
  <van-cell title="修改个人信息" is-link to="/user/update"/>
  <van-cell title="我的创建的队伍" is-link to="/user/team/create"/>
  <van-cell title="我的加入的队伍" is-link to="/user/team/join"/>


</template>


<style scoped>

</style>