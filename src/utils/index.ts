import type { DefineComponent } from 'vue';

export function vModelProp(component: DefineComponent): string {
  return component.model?.prop ?? 'value';
}
