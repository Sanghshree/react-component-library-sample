import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  BrspdAccordions from './BrspdAccordions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/BrspdAccordions',
  component: BrspdAccordions,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BrspdAccordions>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BrspdAccordions> = (args) => <BrspdAccordions {...args} />;

export const Accordion = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Accordion.args = {
label: 'Brsp Accordion',
content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
};




