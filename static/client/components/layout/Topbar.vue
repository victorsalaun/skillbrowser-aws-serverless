<template>
  <header id="header">
    <div id="header-inner-wrap" class=" ">
      <div id="left-header-mobile" class="clearfix">
        <div class="logo">
          <router-link to="/"><img class="normal-logo" src="upload/oshin-logo-black-green.png" alt="Logo"/><img
            class="sticky-logo" src="upload/oshin-logo-black-green.png" alt="Logo"/></router-link>
        </div>
        <div class="header-cart-controls">
          <a class="cart-contents" href="cart.html" title="View your shopping cart">
            <i class="font-icon icon-icon_bag_alt"></i>
          </a>
          <div class="widget_shopping_cart_wrap">
            <div class="widget woocommerce widget_shopping_cart">
              <h2 class="widgettitle">Cart</h2>
              <div class="widget_shopping_cart_content"></div>
            </div>
          </div>
        </div>
        <div class="mobile-nav-controller-wrap">
          <div class="menu-controls mobile-nav-controller" title="Mobile Menu Controller"><i
            class="font-icon icon-list2"></i></div>
        </div>
      </div>

      <div class="clearfix">
        <div class="mobile-menu">
          <ul id="mobile-menu" class="clearfix">
            <li
              class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2471 current_page_item menu-item-2562">
              <router-link to="/">Home</router-link>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2700">
              <router-link to="/client/list">Client</router-link>
              <router-link to="/client/new"><i class="icon-icon_plus"></i></router-link>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2699">
              <router-link to="/employee/list">Employee</router-link>
              <router-link to="/employee/new"><i class="icon-icon_plus"></i></router-link>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2789">
              <router-link to="/skill/list">Skill</router-link>
              <router-link to="/skill/new"><i class="icon-icon_plus"></i></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <!-- END HEADER -->
</template>

<script>
  export default {
    name: 'topbar',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>
