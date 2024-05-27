import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function NormalPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={4} size="small" />
    </Stack>
  );
}