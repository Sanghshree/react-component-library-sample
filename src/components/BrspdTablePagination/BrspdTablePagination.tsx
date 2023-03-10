import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import TablePagination from '@mui/material/TablePagination';

import Stack from '@mui/material/Stack';

export interface TablePaginationProps {
count?: number;
    onClick?: () => void;
  }

const BrsdpTablePagination = ( {count , ...props} : TablePaginationProps) => {
    
  return (
    <Stack spacing={2}>
      <Pagination count={count}
       shape="rounded" />
    </Stack>
  );
}
export default  BrsdpTablePagination;

/*import * as React from 'react';


export default function TablePaginationDemo() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}*/ 