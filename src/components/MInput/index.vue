<script lang="tsx">
import { defineComponent } from 'vue';
import Target from 'ant-design-vue/es/input';
import MControl from '../MControl';
import { vModelProp } from '@/utils';

export default defineComponent({
  name: Target.name.replace('A', 'M'),
  props: {
    [vModelProp(Target)]: Target.props[vModelProp(Target)],
  },
  inheritAttrs: false,
  render() {
    return (
      <MControl
        component={Target.name}
        on={this.$listeners}
        attrs={{ ...this.$props, ...this.$attrs }}
        scopedSlots={this.$scopedSlots}
      />
    );
  },
});
</script>