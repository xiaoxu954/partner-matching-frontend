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


//
// const mockUser = ref({
//   id: 931,
//   username: '小徐',
//   userAccount: 'xiaoxu',
//   profile: '一条咸鱼',
//   gender: 0,
//   phone: '123456789101',
//   email: 'shayu-yusha@qq.com',
//   avatarUrl: 'https://nlp-eb.cdn.bcebos.com/static/eb/asset/robin.e9dc83e5.png',
//   tags: ['java', 'emo', '打工中', 'emo', '打工中'],
//   createTime: new Date(),
// })
//
// const userList = ref({mockUser});

</script>

<template>

  <user-card-list :user-list="userList" :loading="loading"/>

  <van-empty v-if="!userList || userList.length < 1" description="数据为空"/>
  <!--    <van-card-->
  <!--        v-for="user in userList"-->
  <!--        :desc="`666${user.profile}`"-->
  <!--        :title="`${user.username}`"-->
  <!--        :thumb="user.avatarUrl"-->
  <!--    >-->
  <!--      <template #tags>-->
  <!--        <van-tag plain type="danger" v-for="tag in tags" style="margin-right: 8px; margin-top: 8px">-->
  <!--          {{ tag }}-->
  <!--        </van-tag>-->
  <!--      </template>-->
  <!--      <template #footer>-->
  <!--        <van-button size="mini">联系我</van-button>-->
  <!--      </template>-->
  <!--    </van-card>-->


</template>

<style scoped>

</style>


