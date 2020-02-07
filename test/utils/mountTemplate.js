import { createLocalVue, mount } from '@vue/test-utils'

export default async (component, template, options = {}) => {
  const localVue = options.localVue || createLocalVue()

  const newComponent = localVue.component(`${component.name}-test`, {
    template,
    components: {
      [component.name]: component
    }
  })

  const wrapper = mount(newComponent, options)

  await localVue.nextTick()

  return wrapper
}
