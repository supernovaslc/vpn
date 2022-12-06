import React from 'react';
import { Flex } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';

const Layout = layout => {
  const {
    type = 'full',
    header = <Header />,
    footer = <Footer />,
    children,
    ...props
  } = layout;

  return (
    <Flex width="100vw" minHeight="100vh" direction="column">
      {header ? header : null}
      <Flex
        {...props}
        flexGrow={1}
        sx={{
          ...props.sx,
          ...(type === 'wide'
            ? {
                margin: '0 auto',
                width: '100%',
                height: '100%',
                maxWidth: '900px',
              }
            : type === 'full'
            ? {
                width: '100%',
                height: '100%',
              }
            : {}),
        }}
      >
        {children}
      </Flex>
      {footer ? footer : null}
    </Flex>
  );
};

export default Layout;
