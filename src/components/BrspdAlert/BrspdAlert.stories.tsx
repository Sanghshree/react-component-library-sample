import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  BrspdAlert from './BrspdAlert';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/BrspdAlert',
  component: BrspdAlert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BrspdAlert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BrspdAlert> = (args) => <BrspdAlert {...args} />;

export const Alert = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Alert.args = {
message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
};

