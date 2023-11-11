<script setup lang="ts">

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

// const user = {
//   id: 1,
//   username: '小徐',
//   userAccount: 'xiaoxu',
//   avatarUrl: 'https://nlp-eb.cdn.bcebos.com/static/eb/asset/robin.e9dc83e5.png',
//   gender: '男',
//   profile: '这是一个简介',
//   phone: '12131133313',
//   email: '23432444@qq.com',
//   createTime: new Date(),
// }


</script>

<template v-if="user">

  <van-cell title="当前用户" :value="user?.username"/>
  <van-cell title="修改信息" is-link to="/user/update"/>

  <!--  <van-cell title="昵称" is-link to='/user/edit' :value="user.username"-->
  <!--            @click="toEdit('username','昵称',user.username)"/>-->
  <!--  <van-cell title="账号" :value="user.userAccount"/>-->

  <!--  <van-cell title="头像" is-link to="/user/edit">-->
  <!--    <img style="height: 48px" :src="user.avatarUrl">-->
  <!--  </van-cell>-->

  <!--  <van-cell title="性别" is-link to='/user/edit' :value="user.gender"-->
  <!--            @click="toEdit('gender','性别',user.gender)"/>-->
  <!--  <van-cell title="电话" is-link to='/user/edit' :value="user.phone"-->
  <!--            @click="toEdit('phone','电话',user.phone)"/>-->
  <!--  <van-cell title="邮箱" is-link to='/user/edit' :value="user.email"-->
  <!--            @click="toEdit('email','邮箱',user.email)"/>-->
  <!--  <van-cell title="注册时间" :value="user.createTime.toISOString()"/>-->
</template>


<style scoped>

</style>