// 'use client';

// import { Container } from '@mui/material';
// import { PropsWithChildren } from 'react';

// export default function MainContainer({ children }: PropsWithChildren) {
//   return (
//     <Container
//       sx={{
//         // border: '2px solid black',
//         marginTop: '2%',
//       }}
//     >
//       {children}
//     </Container>
//   );
// }

'use client';

import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function MainContainer({ children }: PropsWithChildren) {
  return (
    <Container
      sx={{
        maxWidth: { xs: '90%', sm: '80%' },
        marginTop: '20px',
      }}
    >
      {children}
    </Container>
  );
}
