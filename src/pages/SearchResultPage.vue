<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="user.username"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px; margin-top: 8px">
        {{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import myAxios from "../plugins/myAxios.js";

const route = useRoute();

const {tags} = route.query;


onMounted(() => {
  myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags

    }
  })
      .then(function (response) {
        console.log('/user/search/tags succeed',response);
      })
      .catch(function (error) {
        console.error ('/user/search/tags error',error);
      });
})


const mockUser = ref({
  id: 931,
  username: '小徐',
  userAccount: 'shayu',
  profile: '一条咸鱼',
  gender: 0,
  phone: '123456789101',
  email: 'shayu-yusha@qq.com',
  avatarUrl: ' ',
  tags: ['java', 'emo', '打工中', 'emo', '打工中'],
  createTime: new Date(),
})

const userList = ref({mockUser});

</script>

<style scoped>

</style>