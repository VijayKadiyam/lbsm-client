<template>
  <div>
    <div class="breadcrumb">
      <slot name="header">
        <h1 style="color: white">{{ page }}</h1>
        <ul>
          <li>
            <a href="" style="color: white"> {{ folder }} </a>
          </li>
          <li style="color: white">{{ page }}</li>
        </ul>
      </slot>
    </div>
    <div class="separator-breadcrumb border-top" style="color: white"></div>
  </div>
</template>
<script>
export default {
  props: ["page", "folder"],
};
</script>
