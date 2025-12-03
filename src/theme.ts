import { createTheme } from '@mantine/core';

import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

export const theme = createTheme({
  focusRing: 'never',
  colors: {
    adiba: [
      '#E7E8EB',
      '#CFD1D8',
      '#B7BAC4',
      '#9FA3B1',
      '#575E77',
      '#273050',
      '#0f193d',
      '#0D1636',
      '#0C1430',
      '#0A112A',
    ],
    altiba: [
      '#F4E2CE',
      '#EED4B5',
      '#E9C59D',
      '#D89A54',
      '#D38C3B',
      '#CD7E23',
      '#c8700b',
      '#B46409',
      '#A05908',
      '#8C4E07',
    ],
  },
  fontFamily: 'Poppins',
  headings: {
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  primaryColor: 'adiba',
  other: {
    fontWeights: {
      normal: 300,
    },
  },
});
