import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BrspdMultiSelectField from './BrspdMultiSelectField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/BrspdMultiSelectField',
  component: BrspdMultiSelectField,
} as ComponentMeta<typeof BrspdMultiSelectField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BrspdMultiSelectField> = (args) => <BrspdMultiSelectField {...args} />;

export const Select = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Select.args = {
  label: 'InputLabel',
  defaultValue: 'Select', 
  error:false,
  isRequired: false,
  isMultiSelect:false,
  errorMessage:'This is required field',
  isGrouped: false,
  isTooltip: false
};
