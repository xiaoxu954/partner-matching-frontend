<script setup lang="ts">


import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";

const router = useRouter();

const doJoinTeam = () => {
  router.push({
    path: "/team/add"
  })
}
const teamList = ref([]);
const teamText = ref('')
const searchText = ref('');

const active = ref('public')

/**
 * 切换查询状态
 * @param name
 */
const onTabChange = (name) => {
  // 查公开
  if (name === 'public') {
    listTeam(searchText.value, 0);
  } else {
    // 查加密
    listTeam(searchText.value, 2);
  }
}
/**
 * 搜索队伍
 * @param val
 * @param status
 */
const listTeam = async (val = '', status = 0) => {
  const res = await myAxios.get('/team/list/my/join', {
    params: {
      searchText: val,
      pageNum: 1,
      status,
    },
  });
  if (res?.code === 0) {
    teamList.value = res.data
  } else {
    console.log("加载队伍失败，请刷新重试")
  }
}


//在页面加载时触发一次
onMounted(() => {
  listTeam()
})


const onSearch = (val) => {
  listTeam(val)
};


</script>

<template>
  <van-search
      v-model="teamText"
      placeholder="搜索队伍"
      @search="onSearch"
  />

  <div id="TeamPage">
    <van-button class="add-button" type="primary" icon="plus" @click="doJoinTeam"/>
    <van-tabs v-model:active="active" @change="onTabChange">
      <van-tab title="公开" name="public"/>
      <van-tab title="加密" name="private"/>
    </van-tabs>
    <TeamCardList :teamList="teamList"/>
  </div>
  <van-empty v-if="teamList?.length < 1" description="数据为空"/>
</template>

<style scoped>

</style>