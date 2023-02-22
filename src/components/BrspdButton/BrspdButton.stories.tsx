import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  BrspdButton from './BrspdButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/BrspdButton',
  component: BrspdButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BrspdButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BrspdButton> = (args) => <BrspdButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
 buttonType: 'primary',
  label: 'Button',
  size: 'default',
  isDisabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary',
  label: 'Button',
  size: 'default' ,
  isDisabled: false
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  buttonType: 'tertiary',
  label: 'Button',
  size: 'default' ,
  isDisabled: false
};

export const DefaultSize = Template.bind({});
DefaultSize.args = {
  label: 'Button',
  size: 'default' ,
  isDisabled: false
};
export const Fullwidth = Template.bind({});
Fullwidth.args = {
  buttonType: 'primary',
  label: 'Button',
  size: 'fullwidth' ,
  isDisabled: false
};

