<template>
  <div class="sb-slidebar sb-left">
    <i class="overlay-menu-close font-icon icon-icon_close"></i>
    <div class="display-table">
      <div id="sb-slidebar-content" class="sb-slidebar-content ajaxable">
        <div id="logo-sidebar">
          <router-link to="/"><img class="transparent-logo dark-scheme-logo" src="upload/oshin-logo-black-green.png"
                                   alt=""/></router-link>
        </div>
        <div class="menu">
          <ul id="slidebar-menu" class="clearfix">
            <li id="menu-item-2562"
                class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2471 current_page_item menu-item-2562">
              <router-link to="/">Home</router-link>
            </li>
            <li id="menu-item-2700" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2700">
              <router-link to="/client/list">Client</router-link>
              <router-link to="/client/new"><i class="icon-icon_plus"></i></router-link>
            </li>
            <li id="menu-item-2699" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2699">
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
  </div>
</template>
