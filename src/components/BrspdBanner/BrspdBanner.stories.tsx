import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  BrspdBanner from './BrspdBanner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/BrspdBanner',
  component: BrspdBanner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BrspdBanner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BrspdBanner> = (args) => <BrspdBanner {...args} />;

export const Banner = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Banner.args = {
message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <a>link</a>',
};
