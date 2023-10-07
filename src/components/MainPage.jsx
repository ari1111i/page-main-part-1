import React, { useState, useEffect } from 'react'

import { styled } from 'styled-components'

import { MainContent } from './MainContent'

import img from '../images/main-like.png'

import images from '../images/main-dis.png'

import image from '../images/main-loy.png'

const Img = styled('img')`
   margin-left: -130px;
`
const Image = styled('img')`
   margin-left: -5px;
`
const Images = styled('img')`
   margin-left: -30px;
`

const Button = styled('button')`
   width: 291px;
   padding: 7px 24px 7px 24px;
   background-color: #8639b5;
   color: white;
   border: none;
   border-radius: 5px;
   margin-left: 550px;
   margin-top: 150px;
   height: 39px;
   &:hover {
      background-color: #6a1f99;
      cursor: pointer;
   }
`
const Paragraph = styled('p')`
   margin-top: 40px;
   padding-left: 70px;
`
const Paragrap = styled('p')`
   margin-top: 40px;
   margin-left: -850px;
`
const Par = styled('p')`
   color: #8639b5;
   font-size: 40px;
   font-family: Arial, Helvetica, sans-serif;
   margin-left: 90px;
   padding-right: 50px;
`
const Pteg = styled('p')`
   color: #8639b5;
   font-size: 40px;
   font-family: Arial, Helvetica, sans-serif;
   margin-left: 90px;
   padding-right: 100px;
`
const Para = styled('p')`
   color: #8639b5;
   font-size: 40px;
   font-family: Arial, Helvetica, sans-serif;
   margin-left: 90px;
`

const Div = styled('div')`
   justify-content: center;
   display: flex;
   padding: 20px 50px 20px 50px;
`
const DivBlock = styled('div')`
   justify-content: center;
   display: flex;
   margin-top: 150px;
   margin-left: 50px;
`

const B = styled('b')`
   font-family: Arial, Helvetica, sans-serif;
   margin-left: 5px;
   font-size: 23px;
`
const Bo = styled('b')`
   font-family: Arial, Helvetica, sans-serif;
   margin-left: 5px;
   font-size: 23px;
   margin-top: -20px;
`
const Bl = styled('b')`
   font-family: Arial, Helvetica, sans-serif;
   margin-left: 10px;
   font-size: 23px;
`
const Li = styled('li')`
   margin-top: 30px;
   margin-left: -60px;
   padding: 60px -60px 60px 60px;
`
const Lis = styled('li')`
   margin-top: 30px;
   margin-left: 50px;
   padding: 60px -60px 60px 60px;
`
const Liss = styled('li')`
   margin-top: 30px;
   margin-left: 60px;
   padding: 60px -60px 60px 60px;
`

export function MainPage() {
   const [userCount, setUserCount] = useState(0)
   const [giftCount, setGiftCount] = useState(0)
   const [donationCount, setDonationCount] = useState(0)
   const [checkCount, setCheckCount] = useState(0)

   const targetUserCount = 100000
   const targetGiftCount = 10000
   const targetDonationCount = 15000
   const targetCheckCount = 9000

   useEffect(() => {
      const userInterval = setInterval(() => {
         if (userCount < targetUserCount) {
            setUserCount(userCount + 100)
         }
      }, 100)

      const giftInterval = setInterval(() => {
         if (giftCount < targetGiftCount) {
            setGiftCount(giftCount + 10)
         }
      }, 100)

      const donationInterval = setInterval(() => {
         if (donationCount < targetDonationCount) {
            setDonationCount(donationCount + 10)
         }
      }, 100)

      const checkInterval = setInterval(() => {
         if (checkCount < targetCheckCount) {
            setCheckCount(checkCount + 1)
         }
      })

      return () => {
         clearInterval(userInterval)
         clearInterval(giftInterval)
         clearInterval(donationInterval)
         clearInterval(checkInterval)
      }
   }, [userCount, giftCount, donationCount])

   return (
      <div>
         <Div>
            <Para>{userCount} K+</Para>
            <Par>{giftCount} K+</Par>
            <Pteg>{donationCount} K+</Pteg>
            <Par>{checkCount} K+</Par>
            <Paragrap>Пользоватей</Paragrap>
            <Paragraph>Размещение подарков</Paragraph>
            <Paragraph>Подаренных подарков</Paragraph>
            <Paragraph>Реализованный благотворительной помощи</Paragraph>
         </Div>
         <DivBlock>
            <ul>
               <Img src={img} alt="" />
               <Bo>Дари то что, необходимо</Bo>
               <Li>Находи своих близких</Li>
               <Li>Просматривай их списки желаний</Li>
               <Li>Узнавай о ближайших мероприятиях</Li>
            </ul>
            <ul>
               <Image src={images} alt="" />
               <B>Удобство в использовании</B>
               <Liss>Создавай неограниченное колчичество желаний </Liss>
               <Liss>Добавляй подарки которые ты действительно хочешь</Liss>
               <Liss>Делись с своими желаниями с другими</Liss>
            </ul>
            <ul>
               <Images src={image} alt="" />
               <Bl>Твори добро</Bl>
               <Lis>Дари благотворительные подарки</Lis>
               <Lis>Делись своими вещами</Lis>
               <Lis>Помогай другим приобрести необходимое</Lis>
            </ul>
         </DivBlock>
         <Button type="button">ЗАРЕГЕСТРИРОВАТСЯ</Button>
         <MainContent />
      </div>
   )
}
