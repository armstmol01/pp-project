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
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9PxQqpFTmibX1Jj_VFCDr5BShTlywpnHBLjt0jB54o3NazWCOvM65sJHY1YD7vixeVs3t1e31DiTvW4AcRme4FXY4vCI3A0kX2pipanazUFoOTydC_dciGxOfzIFl7AfcdIlKan5zoKglaa-JiFPe1Rg5D0nWfW5zg1GRs5pXZWQHI6HZRmtp_BM/s4032/shep%20sandy%201.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgANjdTB2idPAX2aH5ZF0MsY9JbSafayzDHlAlmVUU8KiiR5cfyL2dSHyoSpBi3ibMzFfNqnTstvTjypVpA0GsJ8TcWtyRwr8i7wWmtwpMA7OKMYcEWqQfK42LB9CRlcGYQd3yBSRSPqEt_7Jm74X9pdwlX_CdUw_cZyFn0JrowW8MRuwlFT_rbP10/s2896/newshep.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyVlH6ejIRlx0PZFZv1m6S-wznDyw3m_wMu8I9re0DQ1GdhqXK-kg4Xl1tv-gvxKL3h6WFvqT9oT8L-Ep55Vhd3LeFINs7bfl_K-Xpn3xLc9XYsiYoUFAnfnIN05IsP4HFJLycRXXpQLpEimtYUZST9RCSDJUe2f109zlIDraRb-_zT0T24lFlUW4/s4032/amy-shep-0.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgOFewJ-_ALCPJkcaPw__bcjiLPT9l1_QiMfq--vEm1RPhBlNQbcc6XsqPxg6JgxbIBl-a4eDmhxjPfWbqjEzVqfhNJ00dXMzS1bftRusc-cTGxIldRc9h-UVeuBMbY4u5W-1mnVHAEhdN2ztaEp1Y2yNvQUbiVkBP6SdRyvIKUlb5t_qaXLSvZyc/s4032/amy-shep-4.jpg'},
    {path: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4Tr_JW7n18yvYB7wHIPANtEJG5f26IEIkPwBwtxL_3Ood7zQgR8NQhwGqCf6fgqBl---E6UYznE-SfX9rF_lmPqs6gdqz0KPS-xRj-p--ciajT8wsTJ24V7Dpb8h1Kh_q1dmb8do7hMeLN4xmulYprdwiGxg2cwAkmEA4UCx6ryw1rPhWNaUC6Pc/s4032/amy-shep-5.jpg"},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYouNJoF_Uvc6PT6Xl-0xQiK6fcNOIPqCR2ydtmcSmKLWVDiuYU1WQ0zxBHYFLkPpe4nx2WcP7OA4j4xkdrpyJdUjE107Eiez_KiCMSJejf3fKzK4r2yc_kHloylvPZp0qs7hA4qS9vMXzmjWd4O43kucvNgq-TJNTp-BMQ7XaFZ5bXzcykr-G2hA/s4032/amy-shep-3.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhALD--G7mMe5YBQLNYoz0AwgsP9XMDbeTgukarcfPDXm5fP-GY0HYnqFY8jGQ9hBwgsUyIuWKSsHDdpNWsj5ETOYyPbIQCR-Apn_NRTjFZaEc8aDX2CV6UNax3qNt8Jz4Qgk-7GwDvZxje469tHE8-3AVgvrPkRYYlzOlmGT4YmQIP3D0LWi-corE/s4032/amy-shep-2.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgUL2EbINNubWqPHmtG21gdxnsgQWq_fLCWa66tUB0Vo9cke3GinaEagvMISnoaSzK0jFsaG12JiEB495ivWapNJGrzMOYS7dPlk1k76pQOxzQhqKWJEReJu37TL5sSXBn6cVfMipoNcT3wt9YsSNhf9Rc2jrby7bEihlKlFqCJOw4odnXS4kdXTo/s4032/amy-shep-1.jpg'}
  ],
  'natalie-autzen' : [
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifk8zINj7x4UxBQ0NCBJZptDkSZFh1bHCHms7V7Oz6kS1TuIL1mGQfCE5_xCOeLZUhyaIdZ92v1X8DyxCDXaTVDyKMPtEgZnaG6p0uPzI7E23ZnCwC9LWBP_Ds-JMfLRSZ6mfo9OU6hefxR2mPiv0DrgrWuyR5ejNRrtLcrR8k-6h15dLuyNuwoPs/s4032/IMG-6860.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJrJSFhbfeA0ljrw_MK0D_ld88neQ7dPGjP48x-qOAe9UnHPg6kqnmGk8S4y-t8lz_EUv9yvGxQRlINNTfkSBiKruOl4Re__KMiFD3RGaHcnIsrsATbizpbPt3Ea4gCPMw1oWVMec-AFUoeRPHi24JTG_7-oCH3Dkv2qFvnNFC9DrCVGDQOzlGt9w/s4032/IMG-6855.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTDQCMc21Bw6bIi0TIs0AxXG3g-mtm3WM2Na8KIetPZKAv-n1KtzupEkeUK8Wa4ZSJh-LI9YmnTy2ojqDCsnOi5fPbbjpmq8fQagB3YtS3Nib6SClevtFrldjsM8X2QSUmcFy9KRrxf-Q3IIZ4YXLtBzk0SsRspnevHk9nminL6epGIX0tNFgPY7E/s4032/IMG-6853.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXQ4hWhRpeVgF6F5xprFY5e8dRUdt98b9S44jWGtA35_P4xXHR_5pr8ORhX7jt0HuXTZWRa_HzAZpPo2yx7CAqEkW1QOTloqyvbwXTVOstlZV7aQ51y7bPDVk-HpKTNd9LKJu8U-CzshbqKOZGeclGMkJuX9Q0DLuN9uULzv5bQ78Pdpxw5myvdt4/s4032/IMG-6851.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1jXC1RAODAcPEO-Dw9vShHxpOT-9sBP1Ey6djx-YBl0aTYv7eCTRK9U25q2VpN_NbVl_cfhMaGJEA9k4T1A3ODm_btsUWfDifcR2cihz4SLtTw_3X3viBNXwqz8pHhxizedMMs7hZ8S0EHfh5xLee7oV60mHyiGeYntMW8AMoLJNyrMBFGfz2flM/s4032/IMG-6847.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9tSuBtOpIFwUkJZjcDibd2v_dAnN5bmUf4wnNfFf4NxU8OqZxr7q0YdVlzINFIPpomgmP5PwlgSWJkLHE2ZtIRp5JkrO5_3BcdQR1kpVKOdn9lAp5zVLoUcsOM8jh6eprLvId0Rk6fl5uX99fZe6XB9YiD9CjLi56EJwX30K4kXiYErAuF74cDpE/s2129/IMG-6836.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWveqQVxOrMMon4I-toF2Kwez_h62iL0XDvAqM2zcTDAiS00GTziR68ZxaAgha4r8_SxNHfBsoZsXMZN_luILD52I6MWxeg97b9mySh5jmCUw0YwVPqyq1FX_3Of2QI9CdHhBwhKWY0K7xLqIJfAWBB9yGlrZaWR2C8e6NsGMFmlPM2e5rQfhzPfs/s4032/IMG-6806.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtk7BsoFtX0w0MpEefSEdpj9HgGz9p2j63fSHbkbL04mDpyTBaBlzOi7TCdks1956qXZ9mCAynwvhdtK9wv3m2tUgIhezgDQPtyhddA_jjsOZwhDD287-IHW-oc2_4ol55iK_t6l6cg-47nkNt9ElFMtmIkIacSVL1g-5ahIAhfDjS6I4Y1epC7Gc/s4032/IMG-6804.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinXlpDP6vplyoA-NHeBbvj3YnvilURoIA5nRxe6cS4oJvaMtlMUnpUa3fhiSH8nq5uwIuR6WrxYhHbeCmCI1xWBXHMrxv0sk2KWD6xKYKXWd4SB5KnULfpdOuNut1Ki5-yiBuV6itu2_b3axWIAlo-lPbSYZB_McNJKxa70B7fl-Bl4flU_zZbUu8/s4032/IMG-6798.jpg'},
    {path: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh90zHH5bPsyu2AKRQbvAupoa4MmiACjcQ9wbW0VZOuao4QDilrRczuIuVg_UmwnmDnJPOrcISuWra8R7NYWNSVxq7vrplDkNaJvNNZI1hD6tSkYtq7bE1V-z_S_pAmGsyqnf1UD64msgroovcduCx8LQIyM_Jej_ylGknz8D28zoX5t4_jnmrvyX0/s4032/IMG-6785.jpg'}
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