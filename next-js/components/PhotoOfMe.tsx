/** @jsxRuntime classic */
/** @jsx jsx */
import NextImage from 'next/image';
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';

export const PhotoOfMe = () => {
  const [hover, setHover] = useState(false);

  return (
    <Box as="figure">
      <Box
        sx={{ maxWidth: '500px' }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && (
          <NextImage
            priority={true}
            width={500}
            height={500}
            sx={{ borderRadius: 'large' }}
            src={'/assets/Andrew-M-Westling-2022-1.gif'}
            alt="Photo of Andrew at Fort Greene Park"
          />
        )}
        {!hover && (
          <NextImage
            width={500}
            height={500}
            sx={{ borderRadius: 'large' }}
            src={'/assets/Andrew-M-Westling-2022-1.jpg'}
            alt="Photo of Andrew at Fort Greene Park"
          />
        )}
      </Box>
      <Text as="figcaption" variant="label">
        At Fort Greene Park in Brooklyn, June 2022. Photo by Candice McCardle
      </Text>
    </Box>
  );
};
