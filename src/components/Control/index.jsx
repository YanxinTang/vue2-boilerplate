import { defineComponent } from 'vue';

function getInjectionsDisabled(ctx) {
  const ret = ctx.injections.disabled;
  if (Object.hasOwn(ret, 'value')) {
    return ret.value;
  }
  return ret;
}

export default defineComponent({
  functional: true,
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
  inject: {
    disabled: {
      default: false,
    },
  },
  render(h, ctx) {
    const { props } = ctx;
    const { tag: Tag } = props;
    const {
      'data-__field': dataField,
      'data-__meta': dataMeta,
      ...restAttrs
    } = ctx.data.attrs;

    const attrs = {
      ...restAttrs,
      disabled: Object.hasOwn(ctx.data.attrs, 'disabled')
        ? ctx.data.attrs.disabled
        : getInjectionsDisabled(ctx),
    };

    return (
      <Tag attrs={attrs} on={ctx.data.on} scopedSlots={ctx.scopedSlots}>
        {ctx.scopedSlots.default?.()}
      </Tag>
    );
  },
});
