import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .top-menu-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #c20c0c;
    padding-bottom: 5px;
  }
`

export const TopMenuWrapper = styled.div`
  color: #fff;
  overflow: hidden;
  .nav-wrap {
    display: flex;
    justify-content: space-between;
  }
  .link-menu-item {
    border-radius: 12px;
    padding: 0 12px;
    white-space: nowrap;
    color: #fff;
    &.active {
      background-color: #9B0909;
    }
  }
`