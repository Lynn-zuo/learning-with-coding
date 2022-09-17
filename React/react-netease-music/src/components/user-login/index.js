import React, { memo } from 'react'
import { UserLoginWrapper } from './style'
import userLoginImg from '@/assets/img/user-login.jpg';

const UserLogin = memo(() => {
  return (
    <UserLoginWrapper>
        <img className='user-login-img' src={userLoginImg} alt="" />
    </UserLoginWrapper>
  )
})

export default UserLogin