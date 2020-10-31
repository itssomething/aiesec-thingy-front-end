<template>
  <div>
    <div v-if="loading">
      <LoadingSekeleton v-for="index in 10" :key="index"/>
    </div>
    <OppCard v-else v-for="opp in opps" :key="opp.id" :opp="opp" v-on:click.native="showModal(opp)" />
    <EditOppModal :dialogVisible="dialogVisible" :form="form" v-on:hideModal="hideModal"/>
  </div>
</template>

<script>
import LoadingSekeleton from '@/components/LoadingSkeleton.vue'
import OppCard from '@/components/OppCard.vue';
import EditOppModal from '@/components/EditOppModal.vue';
import { GET_OPPS_QUERY } from '@/queries/name.js';

export default {
  components: {
    OppCard,
    LoadingSekeleton,
    EditOppModal
  },
  data() {
    return {
      opps: [],
      loading: true,
      scrolledToBottom: false,
      currentPage: 1,
      dialogVisible: false,
      form: {
        project_name: '',
        description: '',
        opp_id: ''
      }
    }
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow = Math.ceil(document.documentElement.scrollTop + window.innerHeight) === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.fetchOpps();
          this.$data.currentPage++;
        }
      };
    },
    async fetchOpps() {
      this.$apollo.query({
        query: GET_OPPS_QUERY,
        variables: {
          page: this.$data.currentPage
        }
      })
        .then((response) => {
          this.$data.opps = this.$data.opps.concat(response.data.allOpportunity.data)
          this.loading = false
        });
    },
    showModal(opp) {
      console.log(opp.id)
      this.$data.dialogVisible = true
      this.$data.form.project_name = opp.project_name
      this.$data.form.description = opp.description
      this.$data.form.opp_id = opp.id
    },
    hideModal() {
      this.$data.dialogVisible = false;
    }
  },
  mounted() {
    this.fetchOpps();
    this.scroll();
  },
}
</script>
