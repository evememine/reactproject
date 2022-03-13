import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (

    <div className={classes.footer}>
      <div className={classes.footer__text}>
        <div className={classes.stie__name}>플레이데이터</div>
        <div className={classes.footer__text__info}>
          <p><span><strong>- 대표이사 &nbsp;&nbsp;</strong>이화식</span></p>  
          <p><span><strong>· 개인정보책임관리자 &nbsp;&nbsp;</strong>백소연</span></p>  
          <p><span><strong>· 서초교육센터 &nbsp;&nbsp;</strong>서울시 서초구 서초대로46길 42, 엔코아 타워</span></p>  
          <p><span><strong>· 남부교육센터 &nbsp;&nbsp;</strong>서울시 서초구 효령로 335, 1층 플레이데이터</span></p>  
          <p><span><strong>· 이메일 &nbsp;&nbsp;</strong>playdata@playdata.io&nbsp;</span></p>  
          <p><span><strong>· 사업자등록번호 &nbsp;&nbsp;</strong>229-81-30104</span></p>  
          <p><span><strong>· 통신판매업신고번호 &nbsp;&nbsp;</strong>2017-서울서초-1653</span></p>  
          <p><span><strong>· 고객지원 &nbsp;&nbsp;</strong>오전 10시 ~ 오후 5시 (주말 및 공휴일 제외)</span></p>  
          <p><span><strong>·&nbsp;</strong></span><a href="https://playdata.io/refund" ><span><strong>수강료 환불 규정</strong></span></a></p>  
        </div> 
        <div className={classes.copyright}>
        Copyright ⓒ 2022 플레이데이터 All rights reserved.
        </div>
      </div>
      <div className={classes.footer__menu}>
        <ul className={classes.footer__all_nav}>
          <li><a href=""><span>Pre-Lesson</span></a></li>
          <li><a href=""><span>Bootcamp</span></a></li>
          <li><a href=""><span>Seminar</span></a></li>
          <li><a href=""><span>Career Program</span></a></li>
        </ul>
      </div>
      <div className={classes.footer__policy}>
        <ul>
          <li><a href="">이용약관</a></li>
          <li><a href="">개인정보처리방침</a></li>
        </ul>
      </div>
    </div>

  )
}

export default Footer