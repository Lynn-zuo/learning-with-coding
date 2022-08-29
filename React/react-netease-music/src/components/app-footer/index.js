import React, { memo } from "react"

import footerLeft from '@/assets/img/footer-left.jpg';
import footerRight from '@/assets/img/footer-right.jpg';
import { FooterWrapper } from "./style";

export default memo(function XAppFooter() {
  return (
    <FooterWrapper>
      <div className="content-wrapper wrap-v1">
        <img className="footer-left" src={footerLeft} alt="logo" />
        <img className="footer-right" src={footerRight} alt="logo" />
      </div>
    </FooterWrapper>
  )
})
