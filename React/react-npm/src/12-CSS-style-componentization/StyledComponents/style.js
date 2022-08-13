import styled, { ThemeProvider } from "styled-components"

// 属性嵌套
const StyledWrapper = styled.div`
  color: black;

  .title {
    text-align: center;
  }
  .center {
    text-align: center;
    color: #86909c;
    font-size: 18px;
    &:hover {
      color: blue;
    }
    &::after {
      content: "伪元素";
    }
  }
`
// attributes属性方法参数
const StyledInput = styled.input.attrs({
  placeholder: "请输入", // 优先级高于组件标签属性
  bColor: "red",
})`
  color: ${(props) => props.color};
  background-color: lightgrey;
  border-color: ${(props) => props.bColor};
`

// 复用样式 -- 继承
const StyleBtn1 = styled.button`
  width: 90px;
  height: 36px;
  outline: none;
  border-color: blue;
  background: white;
  font-size: ${props => props.theme.fontSize};
  color: blue;
`
const StyleBtn2 = styled(StyleBtn1)`
  border: none;
  outline: none;
  border-color: ${props => props.theme.themeColor};
  background: blue;
  color:  ${props => props.theme.themeColor};
`

// 提供主题ThemeProvider

export { ThemeProvider, StyledWrapper, StyledInput, StyleBtn1, StyleBtn2 }
