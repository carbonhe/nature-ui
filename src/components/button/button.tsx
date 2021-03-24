import { defineComponent } from 'vue';
import { PropBuilder } from '@/components/shared/propBuilder';
import { defaultSlot, getPrefixCls } from '@/components/shared/util';
import { Classes } from '@/components/shared/type';

const buttonTypes = ['default', 'primary', 'success', 'warning', 'danger', 'info'];

const buttonSizes = ['large', 'medium', 'small'];

const props = {
  type: PropBuilder.for(String).in(buttonTypes).default('default').build(),
  size: PropBuilder.for(String).in(buttonSizes).default('medium').build(),
  disabled: PropBuilder.for(Boolean).default(false).build(),
  round: PropBuilder.for(Boolean).default(false).build(),
};

const prefixCls = getPrefixCls('button');

export default defineComponent({
  props,
  name: 'NtButton',

  computed: {
    classes(): Classes {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${this.type || 'default'}`]: true,
        [`${prefixCls}-${this.size || 'medium'}`]: true,
        [`${prefixCls}-round`]: this.round,
      };
    },
  },

  methods: {
    handleClick(event: Event) {
      this.$emit('click', event);
    },
  },

  render() {
    const buttonProps = {
      class: this.classes,
      disabled: this.disabled,
      ...this.$attrs,
    };
    return <button {...buttonProps}>{defaultSlot(this)}</button>;
  },
});
