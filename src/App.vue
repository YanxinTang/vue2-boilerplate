<template>
  <main class="main">
    <div class="background">
      <img
        class="img-left-top"
        src="https://gw.alipayobjects.com/zos/bmw-prod/bd71b0c6-f93a-4e52-9c8a-f01a9b8fe22b.svg"
      />
      <img
        class="img-right-bottom"
        src="https://gw.alipayobjects.com/zos/bmw-prod/84ad805a-74cb-4916-b7ba-9cdc2bdec23a.svg"
      />
    </div>

    <div style="text-align: center; padding: 4vh; font-size: 2rem">
      <h1 style="font-size: 4vw">Disable antd Form, Globally</h1>
    </div>

    <section class="block">
      <div class="form-view-card">
        <a-layout>
          <a-layout-header>
            <header class="header">
              <div class="header-left">
                <div class="logo" style="flex: 1">
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    alt="antd logo"
                  />
                </div>
                <a-menu
                  class="header-menu"
                  theme="light"
                  mode="horizontal"
                  v-model="selectedKeys"
                >
                  <a-menu-item key="enable">
                    <a-icon type="edit" />
                    <span>Enable</span>
                  </a-menu-item>
                  <a-menu-item key="disable">
                    <a-icon type="profile" />
                    <span>Disable</span>
                  </a-menu-item>
                </a-menu>
              </div>
              <a-space>
                <a-button type="link" icon="bell" style="color: black" />
                <a-avatar icon="user" />
              </a-space>
            </header>
          </a-layout-header>
          <a-layout>
            <a-layout-sider theme="light" class="sider">
              <a-menu theme="light" mode="inline" v-model="selectedKeys">
                <a-menu-item key="enable">
                  <a-icon type="edit" />
                  <span>Enable</span>
                </a-menu-item>
                <a-menu-item key="disable">
                  <a-icon type="profile" />
                  <span>Disable</span>
                </a-menu-item>
              </a-menu>
            </a-layout-sider>
            <a-layout>
              <a-layout-content>
                <FormView class="form-view" />
              </a-layout-content>
            </a-layout>
          </a-layout>
        </a-layout>
      </div>
    </section>
  </main>
</template>

<script>
import { computed } from 'vue';
import FormView from './FormView.vue';

export default {
  name: 'App',
  components: {
    FormView,
  },
  provide() {
    return {
      disabled: computed(() => this.disabled),
    };
  },
  data() {
    return {
      selectedKeys: ['enable'],
    };
  },
  computed: {
    disabled() {
      return this.selectedKeys.includes('disable');
    },
  },
};
</script>

<style lang="less">
.main {
  height: 100vh;
  position: relative;
}

.background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: -1;

  .img-left-top {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate3d(-50%, 0, 0);
  }

  .img-right-bottom {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate3d(50%, 0, 0);
  }
}

.ant-layout,
.ant-layout-sider,
.ant-layout-header,
.ant-layout-content {
  background: transparent;
  .ant-menu {
    background: transparent;
  }
}

@media screen and (max-width: 768px) {
  .ant-layout-sider {
    display: none;
  }
}

.ant-layout-header {
  height: 48px;
  line-height: 1;
  padding: 24px;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
}
.ant-layout-content {
  overflow: auto;
  padding: 12px;
}
.ant-layout {
  height: 100%;
}

.ant-form-item label {
  line-height: 40px;
}

section.block {
  display: flex;
  flex-flow: row;
  justify-content: center;
}

.form-view-card {
  overflow: hidden auto;
  background: rgba(240, 242, 245, 0.25);
  backdrop-filter: blur(50px);
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: calc(100% - 48px);
  max-width: 1080px;

  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .header-left {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 12px;
    }

    .logo > img {
      width: 30px;
      height: 30px;
    }

    @media screen and (min-width: 768px) {
      .header-menu {
        display: none;
      }
    }
  }

  .form-view {
    border-radius: 12px;
    background: white;
    padding: 12px;
  }
}
</style>
