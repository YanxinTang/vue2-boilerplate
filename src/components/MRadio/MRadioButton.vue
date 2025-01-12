<script lang="tsx">
import { defineComponent } from 'vue';
import Target from 'ant-design-vue/es/radio/RadioButton';
import Control from '../Control';
import { compModelProp } from '@/utils';

export default defineComponent({
  name: Target.name.replace('A', 'M'),
  props: {
    [compModelProp(Target)]: Target.props[compModelProp(Target)],
  },
  inheritAttrs: false,
  render() {
    return (
      <Control
        tag={Target.name}
        on={this.$listeners}
        attrs={this.$attrs}
        scopedSlots={this.$scopedSlots}
      />
    );
  },
});
</script>
