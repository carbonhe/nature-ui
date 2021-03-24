<template>
  <div class="divider">Buttons</div>
  <div class="buttons">
    <div>
      <nt-button size="small">默认按钮</nt-button>
      <nt-button size="small" type="primary">主要按钮</nt-button>
      <nt-button size="small" type="success">成功按钮</nt-button>
      <nt-button size="small" type="warning">警告按钮</nt-button>
      <nt-button size="small" type="danger">危险按钮</nt-button>
      <nt-button size="small" type="info">信息按钮</nt-button>
    </div>
    <div>
      <nt-button>默认按钮</nt-button>
      <nt-button type="primary">主要按钮</nt-button>
      <nt-button type="success">成功按钮</nt-button>
      <nt-button type="warning">警告按钮</nt-button>
      <nt-button type="danger">危险按钮</nt-button>
      <nt-button type="info">信息按钮</nt-button>
    </div>
    <div>
      <nt-button size="large">默认按钮</nt-button>
      <nt-button size="large" type="primary">主要按钮</nt-button>
      <nt-button size="large" type="success">成功按钮</nt-button>
      <nt-button size="large" type="warning">警告按钮</nt-button>
      <nt-button size="large" type="danger">危险按钮</nt-button>
      <nt-button size="large" type="info">信息按钮</nt-button>
    </div>
    <div>
      <nt-button disabled>默认按钮</nt-button>
      <nt-button type="primary" disabled>主要按钮</nt-button>
      <nt-button type="success" disabled>成功按钮</nt-button>
      <nt-button type="warning" disabled>警告按钮</nt-button>
      <nt-button type="danger" disabled>危险按钮</nt-button>
      <nt-button type="info" disabled>信息按钮</nt-button>
    </div>

    <div>
      <nt-button size="small" round>默认按钮</nt-button>
      <nt-button round>默认按钮</nt-button>
      <nt-button size="large" round>默认按钮</nt-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NtButton from './components/button/button';

export default defineComponent({
  name: 'App',
  components: {
    NtButton,
  },

  data() {
    return {};
  },

  methods: {},
});
</script>

<style lang="scss">
@import 'components/button/style/index';

.divider {
  text-align: center;
  font-size: 1.5em;
  font-family: Monaco, serif;
  display: flex;

  align-items: center;

  &::before,
  &::after {
    content: '';
    background-color: $grey;
    height: 1px;
    flex: 1;
    margin: 10px;
  }
}

.buttons {
  div {
    margin-top: 10px;

    & > * {
      margin-right: 10px;
    }
  }
}
</style>
