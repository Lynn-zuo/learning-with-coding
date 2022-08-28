import styled from "styled-components"

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .content-wrapper {
    width: 65%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .footer-left {
    height: 145px;
  }
  .footer-right {
    height: 145px;
  }
`
