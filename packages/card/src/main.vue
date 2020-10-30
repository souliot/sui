<template>
<div :class="[classes, typeClass, sizeClass]">
  <div :class="headClasses" v-if="$slots.title || title">
    <slot name="title">
      <p v-if="title">
        <span>{{ title }}</span>
      </p>
    </slot>
  </div>
  <div :class="extraClasses">
    <slot name="extra"></slot>
  </div>
  <div :class="bodyClasses">
    <slot></slot>
  </div>
</div>
</template>

<script>
const prefixCls = 's-card'
export default {
  name: 'SCard',
  props: {
    type: {
      type: String,
      default: '',
    },
    shadow: {
      type: String,
    },
    size: {
      type: String,
      default: 'default',
    },
    title: {
      type: String,
    },
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`is-${this.shadow}-shadow`]: this.shadow,
        },
      ]
    },
    typeClass() {
      return this.type == '' ? `` : `${prefixCls}--${this.type}`
    },
    sizeClass() {
      return this.size == 'default' ? `` : `${prefixCls}--${this.size}`
    },
    headClasses() {
      return `${prefixCls}__header`
    },
    extraClasses() {
      return `${prefixCls}__extra`
    },
    bodyClasses() {
      return `${prefixCls}__body`
    },
  },
}
</script>
