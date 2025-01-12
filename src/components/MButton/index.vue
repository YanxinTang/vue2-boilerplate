<script lang="tsx">
import { defineComponent } from 'vue';
import Target from 'ant-design-vue/es/button';
import Control from '../Control';

export default defineComponent({
  functional: true,
  render(h, ctx) {
    return (
      <Control tag={Target.name} {...ctx.data} scopedSlots={ctx.scopedSlots} />
    );
  },
});
</script>
