<template>
  <div>
    <div v-if="loading">
      <LoadingSekeleton v-for="index in 10" :key="index"/>
    </div>
    <OppCard v-else v-for="opp in opps" :key="opp.id" :opp="opp" />
  </div>
</template>

<script>
import LoadingSekeleton from '@/components/LoadingSkeleton.vue'
import OppCard from '@/components/OppCard.vue';
import { GET_OPPS_QUERY } from '@/queries/name.js';

export default {
  components: {
    OppCard,
    LoadingSekeleton
  },
  data() {
    return {
      opps: [],
      loading: true,
      scrolledToBottom: false,
    }
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          this.scrolledToBottom = true
        }
      }
    },
    fetchOpps() {
      this.$apollo.query({ query: GET_OPPS_QUERY })
        .then((response) => {
          console.log(response.data.allOpportunity.data)
          this.$data.opps = response.data.allOpportunity.data
          this.loading = false
        });
    }
  },
  async mounted() {
    this.fetchOpps();
    this.scroll();
  },
}
</script>
