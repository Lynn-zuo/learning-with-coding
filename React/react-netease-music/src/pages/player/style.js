import styled from "styled-components";

export const PlayerWrapper = styled.div`
  background: #c1c1c1;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  .player-content {
    background: url(${props => props.bgImg}) repeat-y center 0;
    display: flex;
    flex: row;
  }
`

export const PlayerLeftWrapper = styled.div``

export const PlayerRightWrapper = styled.div``
