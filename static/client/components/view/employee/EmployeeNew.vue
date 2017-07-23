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
                          <form id="employee-form" @submit.prevent="createEmployee" class="contact" autocomplete="off">
                            <fieldset class="contact_fieldset">
                              <input type="text" name="firstname" class="txt autoclear" placeholder="Firstname"
                                     v-model="employee.firstname" required
                                     style="background-color: #ffffff;color: #999999;border-width: 0px; border-style: solid; height: 45px;"/>
                            </fieldset>
                            <fieldset class="contact_fieldset">
                              <input type="text" name="lastname" class="txt autoclear" placeholder="Lastname"
                                     v-model="employee.lastname" required
                                     style="background-color: #ffffff;color: #999999;border-width: 0px; border-style: solid; height: 45px;"/>
                            </fieldset>
                            <fieldset class="contact_fieldset submit-fieldset">
                              <input type="submit" value="Create"
                                     class="be-shortcode mediumbtn be-button rounded"/>
                              <div id="msg" class="message"></div>
                            </fieldset>
                          </form>
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
        employee: {}
      }
    },
    methods: {
      createEmployee() {
        let pathTemplate = '/employee';
        let method = 'POST';
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
      }
    },
  };
</script>
