import React from 'react'
import './ImgDisplay.css'

import {FaCamera} from 'react-icons/fa'

// import Swiper core and required modules
import { Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = {
  'amy-shep-sandi' : [
    // most recent
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOdPlXJDIlkqOBDKfd9uD9DfMbqWSXgJjErlpXYMlm3wzSTf6Pz_fYU9r5pmkaFXsH4bUiZpwPegFnBzZHPNabfO1wknq8FJpElpP5J22rzHLBCJDgULhSg9hY6vK2ENrg8tqI6sTClqsQ1X8WegrtYBhjH1ESV3oNjlCJ85e-CBuzZS5XHL7ROGw/s4032/IMG-0393.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzrfLXm37rGv_sUglM2ZfIryEXFdoUyiH5Y0XRfIsscFflEPA0RyWutN4qpObJ3WAPv1xI2tRNC098tMB6EM_IWf1AtdE_uHfxOFmHh3hdXd5_n9HpMlN3RpxApW4FINsFTX-84zBebffXt8O0SGPNgF552Ngz8fJjuY0AFX-8-beR2aE3l477xGI/s4032/IMG-0264.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeKQh96EmAl41JtyGAHuopHHaJR-kwJKhcr97DoOjYcyJljAGnuB041FtHxtgb2PLZE3uUtCPA9kfVCq-PSXvMcKB0QdvY3whNIVZw6xrIpteBuQwe2gn1Xkdx5ihsuRxckHo4EH8UqNI5hDRIrIBjBbzj0nrs899CvqLL2ai-lPcPN47G57tSHfg/s4032/IMG-9305.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgECt1pTg5RK6VgcYnriztGCnmYskURrrpDjZlg971fpAfIQqTmFSPhHyfdX9tvi1aDGVNqWNHJPHLnmGxDpvCAZmmkunp747LFCyBym62g3DQfDHaGZweGjX5Ybk6GzDlAF6WMHzRpFX7fJZE377K_F_aQoz98p1Zfq8_Qvr4ld2vThGPJkD6XEbA/s4032/IMG-9432.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSNfYsFu-3W_3kQJM093Qof9Wc8z2Es9DiDXJN2tW6Q7KXE7updQgtOV9IEnLlV93cv85OE2hjEYwJtEAynMBYTffoheOhevWltzsBipRzvCo68Qs819ginOsFVOI8fcf7yXkhMFL-Zpnz0Wtp6zjP6KbVA7UciVpvmYBBppGJ3N6IJE4qhGHFr_Y/s4032/IMG-9452.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAiaBSjezVPyibXriOMcBRXEDe7jXZld4zeW8oZT5fLCRZMYP_Z7nl46sag3Xcp2JSf7fFiX3mlZZ0AuGCFhMQd53O9MIu46iJRK_weH4OQm0TaFKuNWXBaTSvjt33SI5L8kERgN2r2MWH-YbNdlha4KSMVxa0lEHfQ7LHZGWl-vEAsOE8fIhH2kw/s4032/IMG-9466.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBPRGRUFT1WSutvSiyOWpnoNwm_Dw1QDZ-aVCcPugQjyVcP4thcL5Ra9w0F5J84wJ0DKhy5rtXV0DKNZ6-TwBg2GJ-sfg2BrPiAyy1u-Wjl7FXZyTb2dHXe3bR6gJFA8qFUxPU0CJg00Qwg6BoHjPAsbjyur04h-jFGkiFpiEkZ3IordUkrJwuxFE/s3088/IMG-9583.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcv-LA9z7ZPwfCCice9mDCACQBXpEm3nwpAr1kebFhvsv3MTQk9tP2lPCSuAzOXVWlzInlMxL5sHvIWERjkbr7wlNPX1e5cCyOkBrje9pNqZCOXmRfmXx5P8BcL1YFKJWfsB3ZGTZap9fD74ZFjnlgb6euy0k74Rg-lM0_3gOw_Sy-uyCpCPXT--M/s4032/IMG-9735%20(1).jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgS71S01ZLUy_yUdl2AKtgGmYvSSY3lNSEyT1W1S1AI_w5Yc9efTDk4wCAHVaQADi9RSoKRuJuvZVXWahBshaZzt6hxAOaE2_CzfIxPt2KTpHtw_-L8ZJEhmf2cEcmQSjwMV8Y8eBmY--G9r44YFbCdxnyIb-0p_j_Lu2BlHakXZzEADTpQZZOQpCI/s4032/IMG-9745%20(1).jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrGIBII7K4vEVYkx6VKj2O9r5zSLnLuyx7876ThOOEGn_vIZo249BhwyuVMz3jJ85eM2GBSMCVcbR1JBaIajqyEarP-kZF8pkXkjrFOWcrEA8XXvOAuVYIh8a_07wgYRbRvzhOAzQVSli6T5OvHEyZ6oFTffUdKjEEsPRa6T2HqseOLpvcpDd9IDk/s1000/IMG-9762.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTnk8HQ8LlRyErZDGnQCmKPHGCjgTYasl3oigOVumESVp7sUq4mfIewdyphBJPBhnfLYfW0wtLsj8TptIFVSELkMVKubmeDjF2VQM_GKruwcqX4A4XLfN8MQUiaCDCTwJIB6yodQ5G-JZEHUE69FD4QQqojw8AAk0hdG8IhQCcnBw3jYdGhWBRXI8/s1000/IMG-9763.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWYsLVdakv7VaAGaDdMvlx9I9el7VSyhgWbV_nMsivmvwWR6-bVRrQ4fUyb-ifjKTMsy9WFUoYYfpnAF9MZ6dzsXcOeR5SRpHAa_QiIWnQmckvANGG3OJDcKqJNvprWXJR5nMG_p4YGE3Zm_pxifnRkyiZE4V5WjH1aH843WMZr3Yz5iAgseTXCOI/s4032/IMG-9799.jpg'}
  ],
  'douglas-gibby' : [
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUpbAF7DETYySuMrWal4hPlscv2NubVsnz0PlRzUOHk8Th3o8Nxb-xvgJwgf4c-VrEu-HjFmBCUbBalSuWxYdrQtoCQP8eo8R9GW56ZdPhF0UbSfdoDbLdH8h_yMyAZqMgi-CAg0yhm01d7-DXdlcwzsw4vfhXTKBM1eQWJ9S_1crfVNdgkAGoMmo/s4032/IMG-8862.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1uuhX1Gv_LTVTMgu70LvKW77p900phmlbj101sAEvZoTDpZmTpnUpB0I6sX81y3sNf3pPGQZ8B6aB7Sx9t7rMgzCvYiWK94PrBCbcOeGcJBjnWQMAOixbsS-1wJKg1vE0NShIgJ54IH54baZrQX41qL_bx8S4bwaqr0Dl0OzV-ei7bJtXHFOqouA/s4032/IMG-8857.jpg'}
  ],
  'molly-kapri' : [
    {path: 'https://drive.google.com/uc?export=view&id=1iuAdwb-IIPgA70BuylhtTsu-Z8D9fiWN'},
    {path: 'https://drive.google.com/uc?export=view&id=1-dOOKpBICsmIawlVEJLXb3zR2TRsbUXL'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_uIUaVeZ5ytn_DpHvqOaa67Ebh0PCzGtwENevPEbn13D7CZkmAlGw1RpYwH2ZfAuZur7hAnpX4dJWcQ-tK8NGCMbRaCpYG24BlFW5KuYS0twm_cv3367OGuGaldZjwj_TrKL_a7FeAZZ9sdKcNIBg9E5grNm2VVushQOWnKGe5X4LXilK_eDWjNY/s4032/IMG-6568.jpg'},
    {path:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFGeBpzOlb7z3LtbbDIWB_foqxmUjc2qbGmBaz4oHgM18AYYKtiS1ShtZ3VrEZy-EsMsCTVe0nEd8a2mgppgRk7VGemmJvDrKwDZ49GG_72PCdD-5N9qv-vUEhhejctDDW9ZDZAw-8W3MI0DvJKoBSMBv0Wf3TVfJCWqaqAGef2H7I_XM-vR23MpI/s4032/IMG-3643.jpg'}
  ]
};

// {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNGCt2OXtP8W4jfThbnPm7eC2CPyMhpqHrUeBTZvpkQuHrze6ECDNPJ6nEa4YaWvOO5BRV0sRU_OeKn6VVYIxkG0fxPpu3gsMwGtjFpZWi35GTvRamS8j0ZOmyzwQRmKSuIxFxwDV6g9acoRZD1iJB-7bRy-rkcDx2HlBlTJBcsVluZvlYxvzGa0o/s4032/IMG-7673.jpg'},
// {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjniVtF_crnLUCS1jZDfSpeicbk9yvSGF20oehQAhhfr_LWbpTj1F8YeFcXHppFLf8SxTMQhdeif0myI4CY4YJ74OH90ShB2RxZ3FaXSRtikrHHWBnp7a6keZeqCTonPPdYXhDPkcRXDhwtL14HR_97iICifihsMR6foZLM6ZAKBMwngj_I4OodCww/s4032/IMG-7644.jpg'},
// {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgm7f9TD_0Gd21LDiOJgOxv6CIf-ZyzAqU5zDP3ObaQGYYU1GXp1sCHlRfwA48fjjyZ6trZvZ12qvi6jdM_i8-5LxfROXOwGjUgMxLWD20NvSgYE_TYc-BDAM9xTSP-WQ6vjfNCBBeZMN5uNYE0sq56uBASImzP8vP-XKeAJltJM1Tcd0eb3xuQoN0/s4032/IMG-7652.jpg'},
// {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9PxQqpFTmibX1Jj_VFCDr5BShTlywpnHBLjt0jB54o3NazWCOvM65sJHY1YD7vixeVs3t1e31DiTvW4AcRme4FXY4vCI3A0kX2pipanazUFoOTydC_dciGxOfzIFl7AfcdIlKan5zoKglaa-JiFPe1Rg5D0nWfW5zg1GRs5pXZWQHI6HZRmtp_BM/s4032/shep%20sandy%201.jpg'},
// {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit_uQPeSULWiN9SXNLjUd63h8I1csNseAytzEtSKG_nOeRzZCz6SokeieAtDGOjWMK-QF7rextRll5-TOIJrusRek9y4kjP9N0aMJcSEo2Hd6BcPQ2WOmh5QH6C9sF7PWwpPVfrYtLv0wxT4IVd8KfR-5bQruai4Xd_cbXh7DvZ39ulGEdHul4AiM/s4032/Image%20(14).jpeg'},
// {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgANjdTB2idPAX2aH5ZF0MsY9JbSafayzDHlAlmVUU8KiiR5cfyL2dSHyoSpBi3ibMzFfNqnTstvTjypVpA0GsJ8TcWtyRwr8i7wWmtwpMA7OKMYcEWqQfK42LB9CRlcGYQd3yBSRSPqEt_7Jm74X9pdwlX_CdUw_cZyFn0JrowW8MRuwlFT_rbP10/s2896/newshep.jpg'},
// {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyVlH6ejIRlx0PZFZv1m6S-wznDyw3m_wMu8I9re0DQ1GdhqXK-kg4Xl1tv-gvxKL3h6WFvqT9oT8L-Ep55Vhd3LeFINs7bfl_K-Xpn3xLc9XYsiYoUFAnfnIN05IsP4HFJLycRXXpQLpEimtYUZST9RCSDJUe2f109zlIDraRb-_zT0T24lFlUW4/s4032/amy-shep-0.jpg'},
// {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgOFewJ-_ALCPJkcaPw__bcjiLPT9l1_QiMfq--vEm1RPhBlNQbcc6XsqPxg6JgxbIBl-a4eDmhxjPfWbqjEzVqfhNJ00dXMzS1bftRusc-cTGxIldRc9h-UVeuBMbY4u5W-1mnVHAEhdN2ztaEp1Y2yNvQUbiVkBP6SdRyvIKUlb5t_qaXLSvZyc/s4032/amy-shep-4.jpg'},
// {path: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4Tr_JW7n18yvYB7wHIPANtEJG5f26IEIkPwBwtxL_3Ood7zQgR8NQhwGqCf6fgqBl---E6UYznE-SfX9rF_lmPqs6gdqz0KPS-xRj-p--ciajT8wsTJ24V7Dpb8h1Kh_q1dmb8do7hMeLN4xmulYprdwiGxg2cwAkmEA4UCx6ryw1rPhWNaUC6Pc/s4032/amy-shep-5.jpg"},
// {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYouNJoF_Uvc6PT6Xl-0xQiK6fcNOIPqCR2ydtmcSmKLWVDiuYU1WQ0zxBHYFLkPpe4nx2WcP7OA4j4xkdrpyJdUjE107Eiez_KiCMSJejf3fKzK4r2yc_kHloylvPZp0qs7hA4qS9vMXzmjWd4O43kucvNgq-TJNTp-BMQ7XaFZ5bXzcykr-G2hA/s4032/amy-shep-3.jpg'},
// {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhALD--G7mMe5YBQLNYoz0AwgsP9XMDbeTgukarcfPDXm5fP-GY0HYnqFY8jGQ9hBwgsUyIuWKSsHDdpNWsj5ETOYyPbIQCR-Apn_NRTjFZaEc8aDX2CV6UNax3qNt8Jz4Qgk-7GwDvZxje469tHE8-3AVgvrPkRYYlzOlmGT4YmQIP3D0LWi-corE/s4032/amy-shep-2.jpg'},
// {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgUL2EbINNubWqPHmtG21gdxnsgQWq_fLCWa66tUB0Vo9cke3GinaEagvMISnoaSzK0jFsaG12JiEB495ivWapNJGrzMOYS7dPlk1k76pQOxzQhqKWJEReJu37TL5sSXBn6cVfMipoNcT3wt9YsSNhf9Rc2jrby7bEihlKlFqCJOw4odnXS4kdXTo/s4032/amy-shep-1.jpg'}

const ImgDisplay = (props) => {
  const imgKey = props.data;
  // console.log(imgKey);

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