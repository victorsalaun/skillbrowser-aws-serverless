<template>
  <div class="login">
    <div class="login_wrapper">
      <div class="animate form login_form">
        <section class="login_content">
          <div class="alert alert-danger" v-if="error">
            <p v-if="error" class="error">{{ errorMessage }}</p>
          </div>
          <form @submit.prevent="login" autocomplete="off">
            <div>
              <input type="text" class="form-control" placeholder="username" v-model="username"/>
            </div>
            <div>
              <input type="password" class="form-control" placeholder="Password" v-model="password"/>
            </div>
            <div>
              <button class="btn btn-default submit">Log in</button>
            </div>
            <div class="clearfix"></div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: false,
        errorMessage: 'An error occured.'
      }
    },
    methods: {
      login() {
        this.$cognitoAuth.signIn(this.username, this.password, (err, result) => {
          if (err) {
            this.error = true;
            this.errorMessage = err.message;
            console.error(err)
          } else if (result) {
            this.$store.dispatch('saveCredentials', result);
            this.$router.replace('/dashboard')
          } else {
            this.$router.replace('/renewLogin')
          }
        })
      }
    }
  }
</script>
