<template>
  <div>
    <nav
      class="navbar navbar-expand-md navbar-dark"
      style="background-color: #ff00ff"
    >
      <a class="navbar-brand" href="/">首页</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="/java">Java </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/b4">Bootstrap </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/js">JavaSript </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/html">Html </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/css">CSS</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
</style>
