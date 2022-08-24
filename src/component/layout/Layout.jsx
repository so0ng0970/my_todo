import React from "react";

import styled from "styled-components";

const Layout = (props) => {
  return <Div className="layout">{props.children}</Div>;
};

const Div = styled.div`
max-width: 1200px;
min-width: 800px;
margin: 0 auto;
`

export default Layout;
