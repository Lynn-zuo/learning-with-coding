import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: url(${props => props.bgImg}) center center/6000px;
  .banner-box {
    display: flex;
    position: relative;
  }
  .banner-left {
    width: 730px;
  }
  .recommend-download {
    width: 254px;
    height: 285px;
  }
  .banner-btn-group {
    .btn {
        position: absolute;
        top: 45%;
        height: 30px;
        width: 30px;
        border-width: 2px;
        border-color: #fff #fff transparent transparent;
        border-style: solid;
    }
    .btn-prev {
        left: -60px;
        transform: rotate(-135deg);
    }
    .btn-next {
        right: -60px;
        transform: rotate(45deg);
    }
  }
`

export const ItemWrapper = styled.div`
  .banner-item {
    display: flex;
    justify-content: center;
    color: #364d79;
    text-align: center;
    img {
        width: 730px;
        height: 285px;
    }
  }
`
