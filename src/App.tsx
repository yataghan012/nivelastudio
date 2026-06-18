/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Load external scripts after component mounts so that the DOM exists
    const loadScripts = async () => {
      try {
        const scriptsToLoad = [
          "/assets/js/jquery.fullPage.js",
          "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js",
          "/assets/js/parallax.js",
          "https://cdnjs.cloudflare.com/ajax/libs/barba.js/1.0.0/barba.min.js",
          "/assets/js/common.min.js",
          "/assets/js/lang.js",
          "/assets/js/scroll-hint.js",
        ];

        for (let src of scriptsToLoad) {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = false;
            if (src.startsWith('http')) {
               script.crossOrigin = "anonymous";
            }
            script.onload = resolve;
            script.onerror = () => reject(new Error(`Failed to load ${src}`));
            document.body.appendChild(script);
          });
        }

        // Any inline scripts
        const inlineScript = document.createElement("script");
        inlineScript.innerHTML = `
          $(document).on('click', '.js-next-slide', function () {
            $('#fp-nav').addClass('fade-out');
            $.fn.fullpage.moveSlideRight();
          });
          $(document).on('click', '.js-prev-slide', function () {
            $('#fp-nav').removeClass('fade-out');
            $.fn.fullpage.moveSlideLeft();
          });
        `;
        document.body.appendChild(inlineScript);
      } catch (err) {
        console.error("Script loading error:", err);
      }
    };

    loadScripts();
  }, []);

  return (
    <>
      <header>
        <a className="name" href="./">
          <img src="logo.png" alt="Nivela Studio — Diseño Web" />
          <span className="logo-text">Nivela Studio</span>
        </a>
        <div className="wrap">
          <div className="lang-switcher">
            <input type="checkbox" id="lang-toggle" className="lang-toggle__input" />
            <label htmlFor="lang-toggle" className="lang-toggle">
              <span className="lang-toggle__text lang-toggle__text--es">ES</span>
              <span className="lang-toggle__slider"></span>
              <span className="lang-toggle__text lang-toggle__text--en">EN</span>
            </label>
          </div>
          <div className="menuIcon js-menuBtn"></div>
        </div>
        <nav className="global-nav">
          <ul className="global-nav__list">
            <li><a href="./" data-es="INICIO" data-en="HOME">INICIO</a></li>
            <li><a href="/amarena.html" data-es="TRABAJOS" data-en="WORKS">TRABAJOS</a></li>
            <li><a href="./servicios.html" data-es="SERVICIOS" data-en="SERVICES">SERVICIOS</a></li>
            <li><a href="./about.html" data-es="SOBRE MÍ" data-en="ABOUT ME">SOBRE MÍ</a></li>
            <li><a className="js-contact" href="./#contact" data-es="CONTACTO" data-en="CONTACT">CONTACTO</a></li>
          </ul>
        </nav>
        <div className="curtain"></div>
        <div className="loader"></div>
      </header>
      
      <main id="barba-wrapper">
        <div className="barba-container" data-namespace="top">
          <div className="fullpage" id="js-fullpage">
            <div className="section">
              <div className="fullpage__slide">
                <div className="title title--top">
                  <h1 className="title__text js-letter" style={{ transform: "translateX(0%) translateZ(0px)" }}>
                    Nivela<br />Studio
                  </h1>
                  <div className="border js-letter"><span></span><span className="js-letter"></span></div>
                  <p className="title__lead js-letter" data-es-html="Diseño Web /<br> Marketing" data-en-html="Web Design /<br> Marketing">
                    Diseño Web /<br /> Marketing
                  </p>
                </div>
                <div className="moon">
                  <div className="moon__img js-parallax-moon">
                    <div className="moon__front layer" data-depth="0.2">
                      <div className="moon__text-wrap">
                        <p className="moon__text js-moon" data-depth="0.5">PORTFOLIO</p>
                      </div>
                    </div>
                    <div className="moon__front layer" data-depth="0.8">
                      <div className="cloud cloud--front1 js-moon">
                        <picture>
                          <img src="/assets/img/cloud1.svg" alt="" />
                        </picture>
                      </div>
                    </div>
                    <div className="moon__back layer" data-depth="0.4">
                      <div className="cloud cloud--back2 js-moon">
                        <picture>
                          <img src="/assets/img/b_cloud02.svg" alt="" />
                        </picture>
                      </div>
                    </div>
                    <div className="moon__front layer" data-depth="0.6">
                      <div className="cloud cloud--front2 js-moon">
                        <picture>
                          <img src="/assets/img/cloud2.svg" alt="" />
                        </picture>
                      </div>
                    </div>
                    <div className="moon__back layer" data-depth="0.5">
                      <picture>
                        <img className="js-moon" src="/assets/img/moon.svg" alt="" />
                      </picture>
                    </div>
                    <div className="moon__front layer" data-depth="0.7">
                      <div className="cloud cloud--front3 js-moon">
                        <picture>
                          <img src="/assets/img/cloud3.svg" alt="" />
                        </picture>
                      </div>
                    </div>
                    <div className="moon__back layer" data-depth="0.3">
                      <div className="cloud cloud--back1 js-moon">
                        <picture>
                          <img src="/assets/img/b_cloud01.svg" alt="" />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="slide active">
                <div className="fullpage__slide">
                  <div className="title">
                    <h2 className="title__text js-letter" data-es-html="Amarena<br>Pastelería" data-en-html="Amarena<br>Bakery">
                      Amarena<br />Pastelería
                    </h2>
                    <div className="border js-letter"><span></span><span className="js-letter"></span></div>
                    <p className="title__lead js-letter" data-es="sitio web / SEO" data-en="website / SEO">sitio web / SEO</p>
                    <div className="btn-wrap js-letter">
                      <a className="btn" href="./amarena.html" rel="noopener noreferrer" data-es="Ver Proyecto" data-en="View Project">
                        Ver Proyecto
                      </a>
                    </div>
                  </div>
                  <a className="image image--amarena" href="./amarena.html">
                    <div className="image__over">
                      <div className="image__cover"></div>
                      <div className="image__cover"></div>
                    </div>
                    <div className="page-num">
                      <p>01</p>
                    </div>
                  </a>
                  <div className="project-nav project-nav--right"></div>
                </div>
              </div>
              <div className="slide">
                <div className="fullpage__slide">
                  <div className="title">
                    <h2 className="title__text js-letter" data-es-html="BioArTec<br>Ortopedia" data-en-html="BioArTec<br>Orthopedic">
                      BioArTec<br />Orthopedic
                    </h2>
                    <div className="border js-letter"><span></span><span className="js-letter"></span></div>
                    <p className="title__lead js-letter" data-es="sitio web / SEO" data-en="website / SEO">sitio web / SEO</p>
                    <div className="btn-wrap js-letter">
                      <a className="btn" href="./bioartec.html" data-es="Ver Proyecto" data-en="View Project">
                        Ver Proyecto
                      </a>
                    </div>
                  </div>
                  <a className="image image--works2" href="./bioartec.html">
                    <div className="image__over">
                      <img src="/assets/img/reile.jpg" alt="Diseño web para BioArTec Orthopedic" />
                      <div className="image__cover"></div>
                      <div className="image__cover"></div>
                    </div>
                    <div className="page-num">
                      <p>02</p>
                    </div>
                  </a>
                  <div className="project-nav project-nav--left">
                    <button className="project-nav__btn js-prev-slide">
                      <i className="fas fa-chevron-left"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="fullpage__slide">
                <div className="title">
                  <h2 className="title__text js-letter" data-es="Sobre Mí" data-en="About Me">Sobre Mí</h2>
                  <div className="border js-letter"><span></span><span className="js-letter"></span></div>
                  <p className="title__lead js-letter" data-es-html="Me apasionan el Diseño, la Tecnología,<br>la Fotografía y las Historias." data-en-html="I love Design, Technology,<br>Photography and Story.">
                    Me apasionan el Diseño, la Tecnología,<br />la Fotografía y las Historias.
                  </p>
                  <div className="btn-wrap js-letter">
                    <a className="btn" href="./about.html" data-es="Conoceme más" data-en="Show me more">
                      Conoceme más
                    </a>
                  </div>
                </div>
                <a className="image image--about" href="./about.html">
                  <div className="image__over">
                    <div className="image__cover"></div>
                    <div className="image__cover"></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="section">
              <div className="fullpage__slide">
                <div className="title">
                  <h2 className="title__text js-letter" data-es="Contacto" data-en="Get In Touch">Contacto</h2>
                  <div className="border js-letter"><span></span><span className="js-letter"></span></div>
                  <ul>
                    <li className="js-letter"><a href="mailto:yataghan073@gmail.com">yataghan073@gmail.com</a></li>
                    <li className="js-letter"><a href="https://wa.me/543513714586" target="_blank" rel="noreferrer">WhatsApp</a></li>
                  </ul>
                </div>
                <div className="image image--contact">
                  <div className="image__over">
                    <div className="image__cover"></div>
                    <div className="image__cover"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="moon-background">
            <div className="moonlight">
              <div className="moonlight__wrap js-parallax-moonlight">
                <div className="layer moonlight__img" data-depth="0.2"></div>
              </div>
            </div>
          </div>
          <div className="star js-parallax-star">
            <div className="layer" data-depth="0.1">
              <div className="star__img">
                <picture>
                  <img src="/assets/img/star.svg" alt="" />
                </picture>
              </div>
            </div>
          </div>
          <div className="sky-color"></div>
        </div>
      </main>
      
      <div id="scroll-hint" className="scroll-hint">
        <div className="arrow-item"></div>
        <div className="arrow-item"></div>
        <div className="arrow-item"></div>
        <div className="arrow-item"></div>
      </div>
    </>
  );
}
