
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


/**
 * 搜索队伍
 * @param val
 */
const listTeam = async (val = '') => {
  const res = await myAxios.get('/team/list/my/create', {
    params: {
      searchText: val,
      pageNum: 1,
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
    <van-button type="primary" @click="doJoinTeam">创建队伍</van-button>
    <TeamCardList :teamList="teamList"/>
  </div>
  <van-empty v-if="teamList?.length < 1" description="数据为空"/>
</template>

<style scoped>

</style>