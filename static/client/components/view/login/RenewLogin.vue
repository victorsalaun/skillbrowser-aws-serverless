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
              <input type="email" class="form-control" placeholder="email" v-model="username"/>
            </div>
            <div>
              <input type="password" class="form-control" placeholder="Old Password" v-model="oldPassword"/>
            </div>
            <div>
              <input type="password" class="form-control" placeholder="New Password" v-model="newPassword"/>
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
  import cognitoAuth from '../../service/cognitoAuth'


  export default {
    data() {
      return {
        username: '',
        oldPassword: '',
        newPassword: '',
        error: false,
        errorMessage: 'An error occured.'
      }
    },
    methods: {
      login() {
        this.$cognitoAuth.forceChangePassword(this.username, this.oldPassword, this.newPassword, (err, result) => {
          if (err) {
            this.error = true
            this.errorMessage = err.message
            console.error(err)
          } else {
            this.$router.replace(this.$route.query.redirect || '/dashboard')
          }
        })
      }
    }
  }
</script>
