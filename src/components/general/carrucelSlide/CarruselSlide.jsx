import React from 'react';
import style from './CarruselSlide.module.css';
import logoIcon from '../../../../Public/Icon/Icon.svg';

function SlideCarrusel() {
  const {slider, slidetrack, slide, } = style

  return (
    <div className={slider}>
        <div className={slidetrack}>
            <div className={slide}>
                <img src="https://res.cloudinary.com/dptlgyfq5/image/upload/f_auto,q_auto/v1/carrusel%22INF%22/remfmbklxzttgonpc77a" alt="foto1"/>
            </div>
            <div className={slide}>
                <img src="https://res.cloudinary.com/dptlgyfq5/image/upload/c_scale,h_100,w_150/carrusel%22INF%22/emjpthk5tajq3seeioda.jpg" alt="foto2"/>
            </div>
            <div className={slide}>
                <img src="https://res.cloudinary.com/dptlgyfq5/image/upload/f_auto,q_auto/v1/carrusel%22INF%22/l71zbi8gt5uhdeuzbvyp" alt="foto3"/>
            </div>
            <div className={slide}>
                <img src="https://res.cloudinary.com/dptlgyfq5/image/upload/v1699922128/carrusel%22INF%22/neoqs2fzwdytftp9x92i.png" alt="foto4"/>
            </div>
            <div className={slide}>
                <img src="https://res.cloudinary.com/dptlgyfq5/image/upload/c_scale,h_150,w_200/carrusel%22INF%22/re4jvt1wa1cg1xo1cry0.jpg" alt="foto5"/>
            </div>
            <div className={slide}>
                <img src="https://res.cloudinary.com/dptlgyfq5/image/upload/c_scale,h_150,w_200/carrusel%22INF%22/byryb5mjjxjh61shq43c.jpg" alt="foto6"/>
            </div>
            <div className={slide}>
                <img src="https://res.cloudinary.com/dptlgyfq5/image/upload/c_scale,h_200,w_200/carrusel%22INF%22/wvhd3wewumzjlrmijxdl.jpg" alt="foto7"/>
            </div>

            <div className={slide}>
                <img src="https://res.cloudinary.com/dptlgyfq5/image/upload/f_auto,q_auto/v1/carrusel%22INF%22/remfmbklxzttgonpc77a" alt="foto1"/>
            </div>
            <div className={slide}>
                <img src="https://res.cloudinary.com/dptlgyfq5/image/upload/c_scale,h_100,w_150/carrusel%22INF%22/emjpthk5tajq3seeioda.jpg" alt="foto2"/>
            </div>
            <div className={slide}>
                <img src="https://res.cloudinary.com/dptlgyfq5/image/upload/f_auto,q_auto/v1/carrusel%22INF%22/l71zbi8gt5uhdeuzbvyp" alt="foto3"/>
            </div>
            <div className={slide}>
                <img src="https://res.cloudinary.com/dptlgyfq5/image/upload/v1699922128/carrusel%22INF%22/neoqs2fzwdytftp9x92i.png" alt="foto4"/>
            </div>
            <div className={slide}>
                <img src="https://res.cloudinary.com/dptlgyfq5/image/upload/c_scale,h_150,w_200/carrusel%22INF%22/re4jvt1wa1cg1xo1cry0.jpg" alt="foto5"/>
            </div>
            <div className={slide}>
                <img src="https://res.cloudinary.com/dptlgyfq5/image/upload/c_scale,h_150,w_200/carrusel%22INF%22/byryb5mjjxjh61shq43c.jpg" alt="foto6"/>
            </div>
            <div className={slide}>
                <img src="https://res.cloudinary.com/dptlgyfq5/image/upload/c_scale,h_200,w_200/carrusel%22INF%22/wvhd3wewumzjlrmijxdl.jpg" alt="foto7"/>
            </div>
        </div>
    </div>
  )
}

export default SlideCarrusel