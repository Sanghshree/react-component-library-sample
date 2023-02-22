import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  BrspdTablePagination from './BrspdTablePagination';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/BrspdTablePagination',
  component: BrspdTablePagination,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BrspdTablePagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BrspdTablePagination> = (args) => <BrspdTablePagination {...args} />;

export const Pagination = Template.bind({});
Pagination.args = {
count: 10
   };
// More on args: https://storybook.js.org/docs/react/writing-stories/args

