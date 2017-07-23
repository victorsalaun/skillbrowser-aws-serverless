<template>
  <div id="main-wrapper">
    <div id="main" class="ajaxable layout-wide">
      <topbar></topbar>

      <div class="header-hero-section"></div>
      <div id="content" class="no-sidebar-page">
        <div id="content-wrap" class="page-builder">
          <section id="page-content">
            <div class="clearfix">

              <div class="be-section clearfix" data-headerscheme="background--light" style="">
                <div class="be-section-pad clearfix" style="padding-top:40px;padding-bottom:0px;">
                  <div class="be-row ">
                    <div class="one-col column-block clearfix    " data-animation="" style="  ">
                      <div class="be-custom-column-inner">
                        <div class="portfolio-all-wrap">
                          <div class="portfolio full-screen full-screen-gutter style1-gutter three-col"
                               data-action="get_ajax_full_screen_gutter_portfolio" data-category="" data-masonry="0"
                               data-showposts="-1" data-paged="2" data-col="three" data-gallery="0"
                               data-filter="portfolio_categories" data-show_filters="no"
                               data-thumbnail-bg-color="rgba(255,255,255,0.8)" data-thumbnail-bg-gradient=""
                               data-title-style="style5" data-cat-color="#757575" data-title-color="#000000"
                               data-title-animation-type="flipInY" data-cat-animation-type="flipInY" data-hover-style=""
                               data-gutter-width="40" data-img-grayscale="c_to_c" data-image-effect="zoom-in"
                               data-gradient-style-color="" data-cat-hide="0" style="margin-right: 40px;">
                            <div class="portfolio-container clickable clearfix portfolio-shortcode init-slide-bottom ">


                              <div class="element be-hoverlay  not-wide no-wide-width-height  c_to_c style5-title"
                                   style="margin-bottom: 40px !important;" v-for="client in orderedClients">
                                <div class="element-inner" style="margin-left: 40px;">
                                  <router-link :to="{name: 'ClientGet', params: { id: client.id }}"
                                               class="thumb-wrap mfp-image" title="port-1">
                                    <div class="flip-wrap">
                                      <div class="zoom-in-effect"><img src="upload/port-1-650x385.jpg"
                                                                       alt/></div>
                                    </div>
                                    <div class="thumb-overlay">
                                      <div class="thumb-bg" style="background-color:rgba(255,255,255,0.8); ">
                                        <div class="thumb-title-wrap ">
                                          <div class="thumb-title be-animate animated " data-animation-type="flipInY"
                                               style="color: #000000; text-align: left;">{{ client.name }}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </router-link>
                                  <a href="#" class="custom-like-button no-liked" data-post-id="1185"><i
                                    class="font-icon icon-icon_heart"></i><span>26</span></a></div>
                              </div>

                            </div>
                          </div>
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
  import _ from 'lodash';

  export default {
    components: {Topbar},
    data() {
      return {
        clientsList: []
      }
    },
    methods: {
      getClientsList() {
        let pathTemplate = '/client';
        let method = 'GET';
        let vm = this;
        this.$adminApiGateway.callApi('undefined', pathTemplate, method, 'undefined', 'undefined',
          function success(data) {
            vm.clientsList = data
          },
          function error(result) {
            console.log('error');
            console.log(result)
          }
        );
      }
    },
    computed: {
      orderedClients: function () {
        return _.orderBy(this.clientsList, 'name')
      }
    },
    mounted() {
      this.getClientsList();
    }
  };
</script>
