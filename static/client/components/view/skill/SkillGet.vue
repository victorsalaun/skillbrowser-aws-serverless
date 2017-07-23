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
                          <form id="skill-form" @submit.prevent="updateSkill" class="contact" autocomplete="off">
                            <fieldset class="contact_fieldset">
                              <input type="text" name="name" class="txt autoclear" placeholder="Name"
                                     v-model="skill.name"
                                     style="background-color: #ffffff;color: #999999;border-width: 0px; border-style: solid; height: 45px;"/>
                            </fieldset>
                            <fieldset class="contact_fieldset submit-fieldset">
                              <input type="submit" value="Update"
                                     class="be-shortcode mediumbtn be-button rounded"
                                     style="background-color: #39d3bc;color: #ffffff;"/>
                              <div id="msg" class="message"></div>
                            </fieldset>
                          </form>
                          <Button type="button" v-on:click="deleteSkill"
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
        skill: {},
      }
    },
    methods: {
      deleteSkill() {
        let pathTemplate = '/skill/' + this.$route.params.id;
        let method = 'DELETE';
        let vm = this;
        this.$adminApiGateway.callApi('undefined', pathTemplate, method, 'undefined', 'undefined',
          function success() {
            vm.$router.push('/skill/list');
          },
          function error(result) {
            console.log('error');
            console.log(result)
          }
        );
      },
      getSkill() {
        let pathTemplate = '/skill/' + this.$route.params.id;
        let method = 'GET';
        let vm = this;
        this.$adminApiGateway.callApi('undefined', pathTemplate, method, 'undefined', 'undefined',
          function success(data) {
            vm.skill = data
          },
          function error(result) {
            console.log('error');
            console.log(result)
          }
        );
      },
      updateSkill() {
        let pathTemplate = '/skill/' + this.$route.params.id;
        let method = 'PUT';
        let vm = this;
        this.$adminApiGateway.callApi('undefined', pathTemplate, method, 'undefined', this.skill,
          function success() {
            vm.$router.push('/skill/list');
          },
          function error(result) {
            console.log('error');
            console.log(result)
          }
        );
      },
    },
    mounted() {
      this.getSkill();
    }
  };
</script>
