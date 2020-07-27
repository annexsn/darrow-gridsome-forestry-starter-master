<template>
  <Layout>
    <g-image src="~/assets/images/danielle-macinnes-IuLgi9PWETU-unsplash.jpg" width="500"/>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Launch'
  },
  created() {
  },
  mounted() {
    // redirect to login if not authenticated
    if (!this.$auth.isAuthenticated()) {
      this.$auth.login()
    }
    this.user = this.$auth.user || {};
  },
  data(){
    return{
      user: {}
    }
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
  }
}
</script>

