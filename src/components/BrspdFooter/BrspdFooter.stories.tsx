import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  BrspdFooter from './BrspdFooter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/BrspdFooter',
  component: BrspdFooter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BrspdFooter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BrspdFooter> = (args) => <BrspdFooter {...args} />;

export const Footer = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Footer.args = {
isCondensed: false,
forAboutItems : [ 'Careers','Newsroom','Contact Us','Wholesale','Partner Program'],
forCustomersItem: ['Customers With Disablities' ,'Support'],
copyrightText: '2022 Brightspeed. All rights reserved.'
};



