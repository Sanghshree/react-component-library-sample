import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BrspdSearch from './BrspdSearch';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/BrspdSearch',
  component: BrspdSearch,
} as ComponentMeta<typeof BrspdSearch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BrspdSearch> = (args) => <BrspdSearch {...args} />;

export const InputLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputLabel.args = {
  label: 'Search',
  error: false,
  errorMessage:'This is required field'
};
