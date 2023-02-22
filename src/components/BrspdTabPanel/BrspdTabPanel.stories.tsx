import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BrspdTabPanel from './BrspdTabPanel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/BrspdTabPanel',
  component: BrspdTabPanel,
} as ComponentMeta<typeof BrspdTabPanel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BrspdTabPanel> = (args) => <BrspdTabPanel {...args} />;

export const TabPanel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TabPanel.args = {
tabLabel: ['Tab1', 'Tab2' , 'Tab3']
};
