import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  ToastMessages from './BrspdToastMessages';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/ToastMessages',
  component: ToastMessages,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ToastMessages>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToastMessages> = (args) => <ToastMessages {...args} />;

export const Messages = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Messages.args = {
 vertical: 'top',
 //hotizontal: 'right',
 duration: 5000,
 type: 'warning',
 open: true,
 message:'Please provide message'
};
