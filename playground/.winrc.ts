import { defineConfig } from 'win';

export default defineConfig({
  presets: [require.resolve('@winner-fed/preset-vue2')],
  plugins: ['../src'],
  elementUI: {},
});
