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
import qs from 'qs'

const route = useRoute();

const {tags} = route.query;


onMounted(() => {
  myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags

    },
    // 用鱼皮的这个我的头像不会显示。
    paramsSerializer: params =>{
      return qs.stringify(params,{indices: false})
    }

    // //序列化
    // paramsSerializer: {
    //   serialize: params => qs.stringify(params, {indices: false}),
    // }

  })
      .then(function (response) {
        console.log('/user/search/tags succeed', response);
      })
      .catch(function (error) {
        console.error('/user/search/tags error', error);
      });

})


const mockUser = ref({
  id: 931,
  username: '小徐',
  userAccount: 'xiaoxu',
  profile: '一条咸鱼',
  gender: 0,
  phone: '123456789101',
  email: 'shayu-yusha@qq.com',
  avatarUrl: 'https://nlp-eb.cdn.bcebos.com/static/eb/asset/robin.e9dc83e5.png',
  tags: ['java', 'emo', '打工中', 'emo', '打工中'],
  createTime: new Date(),
})

const userList = ref({mockUser});

</script>

<style scoped>

</style>