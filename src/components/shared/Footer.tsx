import Link from "next/link";

interface FooterProps {
  pageName: "corderoservices" | "inmobiliaria" | "erp";
}

const Footer = ({ pageName }: FooterProps) => {
  const isERPPage = pageName === "erp";
  const isCorderoServices = pageName === "corderoservices" || isERPPage;
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <div className="company-desc">
            <h3>
              Sobre <span className="highlight">nosotros</span>
            </h3>
            <p>
              Tu centro profesional unificado que conecta la excelencia a través
              de múltiples empresas. Reunimos innovación, calidad y confianza en
              una plataforma integral.
            </p>
          </div>
          <div className="contact-info">
            <h3>
              Contácta<span className="highlight">nos</span>
            </h3>
            <div className="contact-info">
              <div className="info">
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                      stroke="#F19200"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="#F19200"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/OFTTARQ+CORDERO/@-2.8985713,-79.0042523,17z/data=!3m1!4b1!4m6!3m5!1s0x91cd1926262bfbdb:0x78d51c067c80cd87!8m2!3d-2.8985713!4d-79.0042523!16s%2Fg%2F11tdxp1xxk!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D"
                >
                  Calle Luis Cordero 7-53
                  <br />
                  Planta Alta (frente al Teatro Casa de la Cultura)
                </Link>
              </div>
              <div className="info">
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                      stroke="#F19200"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="#F19200"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/OFTTARQ+CORDERO%2Fsucursal/@-2.8612842,-78.964333,17z/data=!3m1!4b1!4m6!3m5!1s0x91cd17000be26b61:0x62a4a81337e4d719!8m2!3d-2.8612842!4d-78.964333!16s%2Fg%2F11ylpl_66f!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D"
                >
                  Centro de Ricaurte
                  <br />
                  Calle Daniel Durán a 1 cuadra del Mercado de Ricaurte
                </Link>
              </div>
              <div className="info">
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8737 4.09106C15.1096 3.31948 14.1996 2.7077 13.1966 2.29136C12.1937 1.87503 11.1179 1.66246 10.032 1.66606C5.48203 1.66606 1.7737 5.37439 1.7737 9.92439C1.7737 11.3827 2.15703 12.7994 2.8737 14.0494L1.70703 18.3327L6.08203 17.1827C7.29036 17.8411 8.6487 18.1911 10.032 18.1911C14.582 18.1911 18.2904 14.4827 18.2904 9.93273C18.2904 7.72439 17.432 5.64939 15.8737 4.09106ZM10.032 16.7911C8.7987 16.7911 7.59036 16.4577 6.53203 15.8327L6.28203 15.6827L3.68203 16.3661L4.3737 13.8327L4.20703 13.5744C3.52165 12.4803 3.1578 11.2155 3.15703 9.92439C3.15703 6.14106 6.24036 3.05773 10.0237 3.05773C11.857 3.05773 13.582 3.77439 14.8737 5.07439C15.5134 5.71095 16.0203 6.46818 16.3651 7.30217C16.7098 8.13616 16.8855 9.0303 16.882 9.93273C16.8987 13.7161 13.8154 16.7911 10.032 16.7911ZM13.7987 11.6577C13.5904 11.5577 12.5737 11.0577 12.3904 10.9827C12.1987 10.9161 12.0654 10.8827 11.9237 11.0827C11.782 11.2911 11.3904 11.7577 11.2737 11.8911C11.157 12.0327 11.032 12.0494 10.8237 11.9411C10.6154 11.8411 9.9487 11.6161 9.16536 10.9161C8.5487 10.3661 8.14036 9.69106 8.01536 9.48273C7.8987 9.27439 7.9987 9.16606 8.10703 9.05773C8.1987 8.96606 8.31536 8.81606 8.41536 8.69939C8.51536 8.58273 8.55703 8.49106 8.6237 8.35773C8.69036 8.21606 8.65703 8.09939 8.60703 7.99939C8.55703 7.89939 8.14036 6.88273 7.9737 6.46606C7.80703 6.06606 7.63203 6.11606 7.50703 6.10773H7.10703C6.96536 6.10773 6.7487 6.15773 6.55703 6.36606C6.3737 6.57439 5.84036 7.07439 5.84036 8.09106C5.84036 9.10773 6.58203 10.0911 6.68203 10.2244C6.78203 10.3661 8.14036 12.4494 10.207 13.3411C10.6987 13.5577 11.082 13.6827 11.382 13.7744C11.8737 13.9327 12.3237 13.9077 12.682 13.8577C13.082 13.7994 13.907 13.3577 14.0737 12.8744C14.2487 12.3911 14.2487 11.9827 14.1904 11.8911C14.132 11.7994 14.007 11.7577 13.7987 11.6577Z"
                      fill="#F19200"
                    />
                  </svg>
                </div>
                <Link target="_blank" href="tel:+5930993157621">
                  099 489 6810
                </Link>
              </div>
              <div className="info">
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 7L13.009 12.727C12.7039 12.9042 12.3573 12.9976 12.0045 12.9976C11.6517 12.9976 11.3051 12.9042 11 12.727L2 7"
                      stroke="#F19200"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
                      stroke="#F19200"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  {!isERPPage && (
                    <Link target="_blank" href="mailto:alexcordero67@hotmail.com">
                      alexcordero67@hotmail.com
                    </Link>
                  )}
                  <Link
                    target="_blank"
                    href={
                      isCorderoServices
                        ? "mailto:cordero.services@hotmail.com"
                        : "mailto:inmocordero@gmail.com"
                    }
                  >
                    {isCorderoServices ? (
                      <>cordero.services@hotmail.com</>
                    ) : (
                      <>inmocordero@gmail.com</>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="social">
            <h3>Síguenos</h3>
            <div className="s-top">
              <Link
                target="_blank"
                href={
                  pageName === "corderoservices"
                    ? "https://www.facebook.com/ofttarq"
                    : "https://www.facebook.com/people/INMO-Cordero/61570584921220"
                }
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8" fill="#F19200" />
                  <path
                    d="M24.9997 11.6667H22.4997C21.3946 11.6667 20.3348 12.1057 19.5534 12.8871C18.772 13.6685 18.333 14.7283 18.333 15.8334V18.3334H15.833V21.6667H18.333V28.3334H21.6663V21.6667H24.1663L24.9997 18.3334H21.6663V15.8334C21.6663 15.6124 21.7541 15.4004 21.9104 15.2442C22.0667 15.0879 22.2787 15.0001 22.4997 15.0001H24.9997V11.6667Z"
                    stroke="black"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                target="_blank"
                href={
                  pageName === "corderoservices"
                    ? "https://www.instagram.com/ofttarq_cordero/"
                    : "https://www.instagram.com/inmo.cordero?igsh=dmkydGp6bzRxajB4"
                }
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8" fill="#F19200" />
                  <g clipPath="url(#clip0_4121_28)">
                    <path
                      d="M24.167 11.6667H15.8337C13.5325 11.6667 11.667 13.5322 11.667 15.8334V24.1667C11.667 26.4679 13.5325 28.3334 15.8337 28.3334H24.167C26.4682 28.3334 28.3337 26.4679 28.3337 24.1667V15.8334C28.3337 13.5322 26.4682 11.6667 24.167 11.6667Z"
                      stroke="black"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.3337 19.475C23.4366 20.1685 23.3181 20.8769 22.9952 21.4992C22.6723 22.1215 22.1614 22.6262 21.5351 22.9414C20.9088 23.2566 20.1991 23.3663 19.5069 23.255C18.8147 23.1436 18.1752 22.8167 17.6794 22.321C17.1837 21.8252 16.8569 21.1857 16.7455 20.4935C16.6341 19.8013 16.7438 19.0916 17.059 18.4653C17.3742 17.8391 17.8789 17.3281 18.5012 17.0052C19.1236 16.6823 19.8319 16.5638 20.5254 16.6667C21.2328 16.7716 21.8878 17.1012 22.3935 17.6069C22.8992 18.1126 23.2288 18.7676 23.3337 19.475Z"
                      stroke="black"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.583 15.4167H24.5913"
                      stroke="black"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4121_28">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(10 10)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                target="_blank"
                href={
                  pageName === "corderoservices"
                    ? "https://www.tiktok.com/@alex_cordero67"
                    : "https://www.tiktok.com/@inmo.cordero?_r=1&_t=ZM-92AfUf2yLRD"
                }
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8" fill="#F19200" />
                  <path
                    d="M28.7501 18.1996C27.0303 18.2037 25.3528 17.6674 23.9544 16.6664V23.6477C23.9539 24.9407 23.5587 26.2027 22.8216 27.265C22.0845 28.3274 21.0406 29.1393 19.8296 29.5924C18.6185 30.0455 17.2981 30.118 16.0447 29.8003C14.7913 29.4826 13.6648 28.7899 12.8158 27.8147C11.9668 26.8395 11.4357 25.6283 11.2936 24.3431C11.1515 23.058 11.4051 21.76 12.0206 20.6229C12.6361 19.4858 13.584 18.5637 14.7377 17.9798C15.8914 17.396 17.1959 17.1783 18.4766 17.3559V20.8672C17.8905 20.6828 17.2612 20.6884 16.6785 20.8831C16.0957 21.0777 15.5894 21.4515 15.2318 21.9511C14.8742 22.4507 14.6836 23.0505 14.6872 23.6649C14.6908 24.2793 14.8885 24.8768 15.252 25.3721C15.6154 25.8675 16.1261 26.2353 16.7111 26.4231C17.2961 26.6109 17.9254 26.609 18.5093 26.4178C19.0932 26.2265 19.6017 25.8557 19.9622 25.3582C20.3227 24.8607 20.5169 24.262 20.5169 23.6477V10H23.9544C23.952 10.2903 23.9763 10.5802 24.027 10.866C24.1465 11.5041 24.3948 12.1111 24.7569 12.6499C25.119 13.1887 25.5872 13.648 26.1329 13.9996C26.9092 14.5129 27.8194 14.7865 28.7501 14.7863V18.1996Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </div>
            <p>Encuéntranos en las redes sociales como {pageName === "corderoservices" ? "Cordero Services" : "Inmobiliaria"}</p>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <p>
            © 2025 {isCorderoServices ? "CORDERO SERVICES" : "OFTTARQ - Arq. Alexandra Cordero"}. Todos los derechos
            reservados.
          </p>
          <div>
            <Link href="/privacy-policy">Privacidad</Link>
            <Link href="terms-and-condition">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
