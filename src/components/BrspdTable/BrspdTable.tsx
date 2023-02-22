import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReactProps } from 'ag-grid-react'
import "ag-grid-community/styles/ag-theme-material.css";
import "ag-grid-community/styles/ag-theme-balham.css";

// This is the shape of the data your table is expecting
export type row = {
  make: string
  model: string
  price: number
  type?: string
}

// This type will be used by storybook to define which controls are available
export interface CustomTableProps {
  isDark?: boolean
  pagination?: boolean
  perPage?: number
  rowData?: Array<row>
  columnDefs?: AgGridReactProps['columnDefs']
  filter?: boolean
  sortable?: boolean
  resizable?: boolean
}

const BrspdTable = ({ isDark, rowData, pagination = false, perPage = 10, columnDefs, sortable = false, filter = false, resizable = false  , ...props}: CustomTableProps) => {

	// This will generate a string that changes each time one of the pagination props changes
	const key = React.useMemo(() => {
    	const prefix = pagination ? 'paginated' : 'not-paginated';
    	return `${prefix}:${perPage}`;
	}, [pagination, perPage]);

	// This will use some of your props to create a default column definition for all columns
	const defaultColDef = React.useMemo(() => {
    	return {
        	editable: true,
        	sortable: sortable,
        	flex: 1,
        	minWidth: 100,
        	filter: filter,
        	resizable: resizable,
    	};
	}, [sortable, filter, resizable]);

	return (
    	<div
        	// the theme can be dynamically assigned based on the `isDark` prop
        	className={`ag-grid-default-table ${isDark ? "ag-theme-dark" : "ag-theme-balham"}`}
        	style={{ height: 400, width: 850 }}>
        	<AgGridReact
            	// the variables can be passed in here, moving the data and configuration out of this component
            	key={key} // using this value as the key forces the table to re-render when the pagination props change
            	rowData={rowData}
            	columnDefs={columnDefs}
            	pagination={pagination}
            	paginationPageSize={perPage}
            	defaultColDef={defaultColDef}
        	/>
    	</div>
	);

};
export default BrspdTable;