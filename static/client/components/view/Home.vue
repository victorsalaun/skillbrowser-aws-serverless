<template>
  <div id="main-wrapper">
    <div id="main" class="ajaxable layout-wide">
      <topbar></topbar>

      <div class="header-hero-section"></div>
      <div id="content" class="no-sidebar-page">
        <div id="content-wrap" class="page-builder">
          <section id="page-content">
          </section>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Topbar from "../layout/Topbar";

  export default {
    components: {Topbar}
  };
</script>
