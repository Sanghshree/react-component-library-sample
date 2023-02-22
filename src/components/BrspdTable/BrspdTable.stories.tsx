import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BrspdTable from "./BrspdTable";

export default {
    title: 'ReactComponentLibrary/BrspdTable',
    component: BrspdTable,
	argTypes: {},
} as ComponentMeta<typeof BrspdTable>;

const Template: ComponentStory<typeof BrspdTable> = (args) => <BrspdTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	rowData: [
    	{ make: "Toyota", model: "Celica", price: 35000, type: "sedan" },
    	{ make: "Nissan", model: "KDH", price: 32000, type: "van" },
    	{ make: "KIA", model: "Sorento", price: 72000, type: "jeep" }
	],
	columnDefs: [
    	{ field: "make", },
    	{ field: "model" },
    	{ field: "price" },
    	{ field: "type" }
	],
	sortable: true,
	resizable: true,
	filter: true,
};

// another story, showing the table’s empty state
export const NoData = Template.bind({});
NoData.args = {
	
};

// This function will generate lots of data, so that you can see how the table behaves when populated with many rows
function getData() {
	let data = new Array()
	for (let x = 0; x < 150; x++) {
    	data.push(
        	{
            	make: ["Toyota", "Nissan", "Kia"][Math.floor(Math.random() * 3)],
            	model: ["Celica", "KDH", "Sorento"][Math.floor(Math.random() * 3)],
            	price: Math.floor(Math.random() * 100000) + 25000,
            	type: ["sedan", "van", "jeep"][Math.floor(Math.random() * 3)]
        	});
	}
	return data;
};

export const LotsOfData = Template.bind({});
LotsOfData.args = {
	columnDefs: [
    	{ field: "make", },
    	{ field: "model" },
    	{ field: "price" },
    	{ field: "type" }
	],
	rowData: getData()
}
