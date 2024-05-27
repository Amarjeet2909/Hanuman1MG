import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationComponent() {
  return (
  <div className='pt-3 d-flex justify-content-end'>
      <Stack spacing={2}>
      <Pagination count={4} showFirstButton showLastButton size="small"  />
    </Stack>
  </div>
  );
}