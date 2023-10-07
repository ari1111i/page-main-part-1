import { styled } from 'styled-components'

import img from '../images/main-page.png'

const Div = styled('div')`
   width: 1440px;
   height: 602px;
   top: 1603px;
   background-color: #8639b5;
   margin-top: 120px;
`
const P = styled('p')`
   color: white;
   margin-left: 700px;
   font-size: 35px;
   font-family: Arial, Helvetica, sans-serif;
   padding-top: 150px;
`
const Ps = styled('P')`
   color: white;
   padding-left: 700px;
   margin-top: 30px;
`
const Img = styled('img')`
   margin-left: 100px;
   margin-top: -150px;
`

export function MainContent() {
   return (
      <div>
         <Div>
            <P>Благотворительность</P>
            <Ps>
               Найти Найти удачный подарок, который принесёт радость, не всегда
               простая задача. Благодаря нашему сервису у вас есть возможность
               не только обрадовать подарком, но и помочь другим приобрести
               необходимые им вещи. В разделе благотворительность вы можете
               найти список опубликованных вещей, забронировав, вы связываетесь
               с их обладателем.
            </Ps>
            <Img src={img} alt="" />
         </Div>
      </div>
   )
}
