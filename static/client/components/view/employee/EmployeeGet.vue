<template>
  <div id="main-wrapper">
    <div id="main" class="ajaxable layout-wide">
      <topbar></topbar>

      <div class="header-hero-section"></div>
      <div id="content" class="no-sidebar-page">
        <div id="content-wrap" class="page-builder">
          <section id="page-content">
            <div class="clearfix">
              <div class="be-section clearfix" data-headerscheme="background--dark" style="">
                <div class="be-section-pad clearfix" style="padding-top:90px;padding-bottom:90px;">
                  <div class="be-row be-wrap clearfix">
                    <div class="one-fourth column-block    " data-animation="" style="  ">
                      <div class="be-custom-column-inner">
                      </div>
                    </div>
                    <div class="three-fourth column-block    " data-animation="" style="  ">
                      <div class="be-custom-column-inner">
                        <p>
                        <div class="contact_form contact_form_module style1-input">
                          <form id="employee-form" @submit.prevent="updateEmployee" class="contact" autocomplete="off">
                            <fieldset class="contact_fieldset">
                              <input type="text" name="firstname" class="txt autoclear" placeholder="Firstname"
                                     v-model="employee.firstname"
                                     style="background-color: #ffffff;color: #999999;border-width: 0px; border-style: solid; height: 45px;"/>
                            </fieldset>
                            <fieldset class="contact_fieldset">
                              <input type="text" name="lastname" class="txt autoclear" placeholder="Lastname"
                                     v-model="employee.lastname"
                                     style="background-color: #ffffff;color: #999999;border-width: 0px; border-style: solid; height: 45px;"/>
                            </fieldset>
                            <fieldset class="contact_fieldset submit-fieldset">
                              <input type="submit" value="Update"
                                     class="be-shortcode mediumbtn be-button rounded"
                                     style="background-color: #39d3bc;color: #ffffff;"/>
                              <div id="msg" class="message"></div>
                            </fieldset>
                          </form>
                          <Button type="button" v-on:click="deleteEmployee"
                                  class="be-shortcode mediumbtn be-button rounded">Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  End Page Content -->
          </section>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Topbar from "../../layout/Topbar";

  export default {
    components: {Topbar},
    data() {
      return {
        employee: {},
      }
    },
    methods: {
      deleteEmployee() {
        let pathTemplate = '/employee/' + this.$route.params.id;
        let method = 'DELETE';
        let vm = this;
        this.$adminApiGateway.callApi('undefined', pathTemplate, method, 'undefined', 'undefined',
          function success() {
            vm.$router.push('/employee/list');
          },
          function error(result) {
            console.log('error');
            console.log(result)
          }
        );
      },
      getEmployee() {
        let pathTemplate = '/employee/' + this.$route.params.id;
        let method = 'GET';
        let vm = this;
        this.$adminApiGateway.callApi('undefined', pathTemplate, method, 'undefined', 'undefined',
          function success(data) {
            vm.employee = data
          },
          function error(result) {
            console.log('error');
            console.log(result)
          }
        );
      },
      updateEmployee() {
        let pathTemplate = '/employee/' + this.$route.params.id;
        let method = 'PUT';
        let vm = this;
        this.$adminApiGateway.callApi('undefined', pathTemplate, method, 'undefined', this.employee,
          function success() {
            vm.$router.push('/employee/list');
          },
          function error(result) {
            console.log('error');
            console.log(result)
          }
        );
      },
    },
    mounted() {
      this.getEmployee();
    }
  };
</script>
