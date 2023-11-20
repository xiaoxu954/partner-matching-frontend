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

//在页面加载时触发一次
onMounted(async () => {
  const res = await myAxios.get('/team/list');
  if (res?.code === 0) {
    teamList.value = res.data
  } else {
    console.log("加载队伍失败，请刷新重试")
  }
})
</script>

<template>

  <div id="TeamPage">
    <van-button type="primary" @click="doJoinTeam">加入队伍</van-button>
    <TeamCardList :teamList="teamList"/>
  </div>
</template>

<style scoped>

</style>