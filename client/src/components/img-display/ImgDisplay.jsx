import React from 'react'
import './ImgDisplay.css'

import {FaCamera} from 'react-icons/fa'

import A from '../../assets/pet-pics/amy-shep-0.jpg';
import B from '../../assets/pet-pics/amy-shep-1.jpg';
import C from '../../assets/pet-pics/amy-shep-2.jpg';
import D from '../../assets/pet-pics/amy-shep-3.jpg';
// import E from '../../assets/pet-pics/amy-shep-4.jpg';
// import F from '../../assets/pet-pics/amy-shep-5.jpg';

// import Swiper core and required modules
import { Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = {
  'amy-shep-sandy' : [
    // most recent
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyVlH6ejIRlx0PZFZv1m6S-wznDyw3m_wMu8I9re0DQ1GdhqXK-kg4Xl1tv-gvxKL3h6WFvqT9oT8L-Ep55Vhd3LeFINs7bfl_K-Xpn3xLc9XYsiYoUFAnfnIN05IsP4HFJLycRXXpQLpEimtYUZST9RCSDJUe2f109zlIDraRb-_zT0T24lFlUW4/s4032/amy-shep-0.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgOFewJ-_ALCPJkcaPw__bcjiLPT9l1_QiMfq--vEm1RPhBlNQbcc6XsqPxg6JgxbIBl-a4eDmhxjPfWbqjEzVqfhNJ00dXMzS1bftRusc-cTGxIldRc9h-UVeuBMbY4u5W-1mnVHAEhdN2ztaEp1Y2yNvQUbiVkBP6SdRyvIKUlb5t_qaXLSvZyc/s4032/amy-shep-4.jpg'},
    {path: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4Tr_JW7n18yvYB7wHIPANtEJG5f26IEIkPwBwtxL_3Ood7zQgR8NQhwGqCf6fgqBl---E6UYznE-SfX9rF_lmPqs6gdqz0KPS-xRj-p--ciajT8wsTJ24V7Dpb8h1Kh_q1dmb8do7hMeLN4xmulYprdwiGxg2cwAkmEA4UCx6ryw1rPhWNaUC6Pc/s4032/amy-shep-5.jpg"},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYouNJoF_Uvc6PT6Xl-0xQiK6fcNOIPqCR2ydtmcSmKLWVDiuYU1WQ0zxBHYFLkPpe4nx2WcP7OA4j4xkdrpyJdUjE107Eiez_KiCMSJejf3fKzK4r2yc_kHloylvPZp0qs7hA4qS9vMXzmjWd4O43kucvNgq-TJNTp-BMQ7XaFZ5bXzcykr-G2hA/s4032/amy-shep-3.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhALD--G7mMe5YBQLNYoz0AwgsP9XMDbeTgukarcfPDXm5fP-GY0HYnqFY8jGQ9hBwgsUyIuWKSsHDdpNWsj5ETOYyPbIQCR-Apn_NRTjFZaEc8aDX2CV6UNax3qNt8Jz4Qgk-7GwDvZxje469tHE8-3AVgvrPkRYYlzOlmGT4YmQIP3D0LWi-corE/s4032/amy-shep-2.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgUL2EbINNubWqPHmtG21gdxnsgQWq_fLCWa66tUB0Vo9cke3GinaEagvMISnoaSzK0jFsaG12JiEB495ivWapNJGrzMOYS7dPlk1k76pQOxzQhqKWJEReJu37TL5sSXBn6cVfMipoNcT3wt9YsSNhf9Rc2jrby7bEihlKlFqCJOw4odnXS4kdXTo/s4032/amy-shep-1.jpg'}
  ],
  'douglas-gibby' : [
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVQuTjNjByGiX-fwbEiLqDQb3oBb_fqr5smZE9_pYmOPHp9FAIrjjowFVJiQhlGbQ5VIhWtFnzzC0Vhx9GZSBu7xQv4NB7EmZEH2q6GdaU_QFbcJPiKw_aycLEG5AwMOwQEg4MZaaJkC4ClGlkn3CNBlGhT8J_Nl8CC05h8nZv0e3EH77Bfp9uq54/s4032/douglas-gibby-3.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtQKLTjZTPTcvKflXlOE1m7pG_t0m-s1br8IbO6tvlufUrZhFEgF4HhSwHHUFAuCAp9dcf0R6yIGkKO2WrAS77g5ILnFMzCnkEBPCLKMp9wwqB8Iqcxz3GNpiH01hRmukFqCLCX5Onr2-sKY28eIL-w__5oPtS8LBvpK2gW7gcHxpxLZQZ55PHs_s/s4032/douglas-gibby-1.JPG'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnExG1T4dRM-p0jRss_yYXjBdUgSxgfYL-8S2T4NhVjeuYeyTCD-1Aa7hhwWifBAuu_bIjK8GYVydW_TcJPd6tZj-NsS2LK_lMoTyygWm11OA-ZewBEqNbNDUBoa3fJOY5zu8jbm4B88aGNMOiMxKWg40MghZXdm3XJMXVl3iFNhndwZB1e4UiSkc/s4032/douglas-gibby-4.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNdDV3ggL0itp5OiP-ol7GfreC-FNlvUE4pHyeHbQcESVFJYmYRdO57uMZQ6pbGw1sMwGA3JXnzU57AAJkYD6vkoYWblMLAyZFCcFkX-190wxVBM0sjY8kRt5P3Wru51c-zrvrxzag572eErV5xNVGLdlZ_0Ca7wY7anaReW9kRtLljVmIyTsiFRE/s3088/douglas-gibby-2.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijdjMCR36FpXghjAOr0ipUbhSUMqG3jr4uXpjOaL3zpu90SorNzF-q6m0e9oF4UVvg9wWCp-3My956CYoa2MCi32ps0HS1rQqnCJvPgIBLhXXPu06hgUsNGmGMm1wG6J6uc3ZUvGti9FqloIn0tz4E5g981cRTQx8r93nyxRBhGPsPnVNKGrgJncY/s4032/douglas-gibby-5.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkfhj-HsSzUmq2E14y0-gn34qwHTYo9N9-IXFkmeu_JnStFMWsgTFxnMOZO-xNfle88g5CA64YSE2uyAm6P6MTq80SGxrrhZqFBIkNVrQQsgFLPDhZVNABk3EY8cIMtMbBrTUkJsP20JwMGW-1oCWgdouBicwrYuzzrqlVByoYet-7ieyhn5VXJao/s4032/douglas-gibby-0.jpg'}

  ]
};

const ImgDisplay = (props) => {
  const imgKey = props.data;
  console.log(imgKey);

  return (
    <div className="pics__container">
      {/*\<p className='download-msg'>click to download</p>  .slice(0).reverse()*/}
      {data[imgKey] ?
      <Swiper className="swiper__container"
      // install Swiper modules
      modules={[Pagination, Scrollbar]}
      spaceBetween={10}
      slidesPerView={3}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
        {
          data[imgKey].map(({path}, index) => {
            return (
              <SwiperSlide key={index} className='swiper-slide'>
                <div className="pic-wrapper">
                  <a href={path} target='_blank' download rel="noreferrer"><img src={path} alt='pet' /></a>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      :
      <div className='img_msg__container'><FaCamera className='camera-icon'/><p>coming soon!</p></div>
      }
    </div>
  )
}

export default ImgDisplay