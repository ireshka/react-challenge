import { Error } from '../ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Zadanie 1/Error',
  component: Error,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ ...args }) => <Error {...args} />;

export const Playground = Template.bind({});
