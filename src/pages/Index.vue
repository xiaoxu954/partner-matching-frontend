<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from "vue-router";
import myAxios from "../plugins/myAxios";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();
const {tags} = route.query;

const userList = ref([]);

// 使用钩子函数
onMounted(async () => {
  // 普通模式，直接分页查询用户  为给定id的user创建请求
  const userListData = await myAxios.get('/user/recommend', {
    withCredentials: true,
    params: {
      pageSize: 8,
      pageNum: 1,
    },
  })

      .then(function (response) {
        console.log('/user/recommend succeed', response);
        return response?.data?.records;
      })
      .catch(function (error) {
        console.error('/user/recommend', error);
        console.log('请求失败');
      })
  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
})


</script>

<template>

  <user-card-list :user-list="userList" :loading="loading"/>

  <van-empty v-if="!userList || userList.length < 1" description="数据为空"/>


</template>

<style scoped>

</style>


