<template>
  <div>
    <el-button type="primary" @click="sortByRecentlyEdited" :loading="sorting">Sort by most recently edited</el-button>
    <el-button type="success" @click="sortByMostEdited" :loading="sorting">Sort by most edited</el-button>

    <el-table :data="histories" stripe style="width: 100%">
      <el-table-column prop="opp_id" label="Opportunity ID" width="400" >
      </el-table-column>
      <el-table-column prop="update_count" label="Number of updates" width="400">
      </el-table-column>
      <el-table-column prop="last_updated_at" label="Last updated at" width="500">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService.js';

export default {
  data() {
    return {
      histories: [],
      sorting: false
    }
  },
  mounted() {
    this.fetchHistories();
  },
  methods: {
    async fetchHistories() {
      ApiService.getHistories()
        .then(res => {
          this.$data.histories = res.data.data
        })
        .catch(err => {
          console.log(err);
        })
    },
    async sortByRecentlyEdited() {
      this.$data.sorting = true;

      ApiService.getHistories({
        params: {
          type: "recently"
        }
      })
        .then(res => {
          this.$data.histories = res.data.data
          this.$data.sorting = false;
        })
        .catch(err => {
          console.log(err);
        })
    },
    async sortByMostEdited() {
      this.$data.sorting = true;

      ApiService.getHistories({
        params: {
          type: "edit_count"
        }
      })
        .then(res => {
          this.$data.histories = res.data.data
          this.$data.sorting = false;
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>
