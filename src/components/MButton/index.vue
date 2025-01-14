<script lang="tsx">
import { defineComponent } from 'vue';
import Target from 'ant-design-vue/es/button';
import MControl from '../MControl';

export default defineComponent({
  functional: true,
  render(h, ctx) {
    return (
      <MControl
        component={Target.name}
        {...ctx.data}
        scopedSlots={ctx.scopedSlots}
      />
    );
  },
});
</script>
