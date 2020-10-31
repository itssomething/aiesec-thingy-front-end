<template>
  <el-row>
    <el-col :offset="4" :span="16">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <el-col :span="10" class="img-container">
          <span class="helper"></span>
          <img width="200px" v-bind:src="opp.cover_photo.url" class="image">
        </el-col>
        <el-col :span="13">
          <div style="padding: 14px;">
            <p><b>{{ opp.project_name }}</b></p>
            <p>{{ shortDescription }}</p>
          </div>
        </el-col>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    opp: Object
  },
  data() {
    return {
      description: this.opp.description
    }
  },
  computed: {
    shortDescription: function (){
      return this.$data.description.substring(0, 200) + '...'
    }
  }
}
</script>
