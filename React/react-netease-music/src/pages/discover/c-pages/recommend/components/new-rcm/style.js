import styled from "styled-components"

export const NewRCMWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const NewDiscWrapper = styled.div`
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #d3d3d3;
  .new-disc-inner {
    height: 184px;
    padding: 10px;
    background: #f5f5f5;
    border: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .arrow {
    height: 12px;
    width: 12px;
    border-width: 2px;
    border-color: #898989 #898989 transparent transparent;
    border-style: solid;
    &.arrow-left {
      transform: rotate(-135deg);
    }
    &.arrow-right {
      transform: rotate(45deg);
    }
  }
  .newest-content {
    width: 730px;
    height: 180px;
    overflow: hidden;
  }
`

export const ItemPageWrapper = styled.div`
  display: flex !important;
  flex-direction: row;
  justify-content: space-around;
  height: 178px;
  margin-top: 22px;
`
