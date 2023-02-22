import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BrspdInputField from './BrspdInputField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/BrspdInputField',
  component: BrspdInputField,
} as ComponentMeta<typeof BrspdInputField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BrspdInputField> = (args) => <BrspdInputField {...args} />;

export const InputLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputLabel.args = {
  label: 'InputLabel',
  error: false,
  errorMessage:'This is required field'
};
