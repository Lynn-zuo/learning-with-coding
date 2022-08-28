import styled from "styled-components"

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #333;
  .header-wrap {
    width: 65%;
    margin: 0 auto;
  }
  .content {
    height: 70px;
    display: flex;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`

export const ContentLeft = styled.div`
  display: flex;
  .logo {
    width: 183px;
  }
  .nav-links {
    display: flex;
  }
  .link-item {
    padding: 0 12px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    a {
      color: #fff !important;
      font-size: 14px;
      text-decoration: none;
      white-space: nowrap;
    }
    &:hover, &.active {
      background-color: #242424;
    }
    &.active .icon {
        position: absolute;
        bottom: 0;
      border: 6px solid;
      border-color: transparent transparent #c20c0c;
    }
  }
`
export const ContentRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search-input {
    height: 30px;
    border-radius: 20px;
    outline: none;
    margin-right: 10px;
  }
  .btn {
    white-space: nowrap;
    border-radius: 20px;
    outline: none;
    border: 1px solid #ccc;
    background-color: transparent;
    color: #fff;
    padding: 7px 15px;
    font-size: 12px;
  }
  .login-btn {
    border: none;
    font-size: 12px;
    &:hover {
        text-decoration: underline;
    }
  }
`
