<template>
  <div>
    <el-dialog title="Edit opportunity" :visible="dialogVisible" @close="hideModal">
      <el-form :model="form">
        <el-input v-model="form.opp_id" auto-complete="off"></el-input>
        <el-form-item label="Title" label-width="200">
          <el-input v-model="form.project_name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Description" label-width="200">
          <el-input v-model="form.description" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="hideModal">Cancel</el-button>
        <el-button @click="submitForm" type="primary" :loading="sending">Save</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService.js';

export default {
  props: {
    dialogVisible: Boolean,
    form: Object
  },
  data() {
    return {
      sending: false
    }
  },
  computed: {
    showDialog() {
      return this.dialogVisible
    }
  },
  methods: {
    hideModal(){
      this.$emit('hideModal')
    },
    async submitForm() {
      this.$data.sending = true;

      ApiService.postUpdateHistories({
        opp_id: this.form.opp_id,
        project_name: this.form.project_name,
        description: this.form.description
      })
        .then(res => {
          this.$data.sending = false;
          console.log(res.data);
          this.hideModal();
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>
