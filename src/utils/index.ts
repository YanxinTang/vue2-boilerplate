import type { DefineComponent } from 'vue';

export function compModelProp(component: DefineComponent): string {
  return component.model?.prop ?? 'value';
}
