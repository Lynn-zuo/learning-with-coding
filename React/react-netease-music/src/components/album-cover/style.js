import styled from "styled-components";

export const AlbumCoverWrapper = styled.div`
  width: ${props => props.width+'px'};
  background: url(${props => props.bgImg}) no-repeat top center/${props => props.width+'px'};
  .cover-img {
    height:  ${props => props.imgHeight+'px'};
  }
  .album-author {
    font-size: 12px;
  }
`