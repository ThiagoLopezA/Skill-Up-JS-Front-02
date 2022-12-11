import React from "react";
import styles from "./AsideNavbar.module.css";
import NavbarButton from "../NavbarButton/NavbarButton";

export default function AsideNavbar() {
  const homeIcon = (
    <svg
      width="1.7em"
      height="1.7em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M11.971 10.503a.93.93 0 00.923-.937.93.93 0 00-.923-.937.93.93 0 00-.923.937.93.93 0 00.923.937zm0 .857c-.984 0-1.78-.804-1.78-1.794s.796-1.795 1.78-1.795c.983 0 1.78.805 1.78 1.795 0 .99-.797 1.794-1.78 1.794zm-6.499 2.268H4.241c-1.112 0-1.654-1.365-.873-2.117l7.097-7.801a2.382 2.382 0 013.393 0l6.78 7.801c.773.781.226 2.117-.872 2.117H18.47v5.324A2.05 2.05 0 0116.42 21h-2.068a1.237 1.237 0 01-1.233-1.241v-3.777c0-.682-.343-1.06-1.148-1.06-.82 0-1.162.369-1.149 1.051.006.311.008.94.007 1.796a499.556 499.556 0 01-.007 1.99c0 .684-.55 1.24-1.232 1.24H7.522a2.048 2.048 0 01-2.05-2.047v-5.324zM11.086 4.3l-7.103 7.808c-.248.24-.08.662.258.662h1.66c.236 0 .428.192.428.429v5.753c0 .658.533 1.19 1.193 1.19H9.59a.38.38 0 00.376-.386 520.294 520.294 0 00.006-1.989c.002-.849 0-1.474-.006-1.777-.022-1.152.695-1.925 2.005-1.925 1.297 0 2.005.778 2.005 1.917v3.777c0 .213.17.384.376.384h2.068c.66 0 1.194-.534 1.194-1.191v-5.753c0-.237.191-.429.428-.429h1.724c.334 0 .503-.414.245-.676l-6.77-7.79a1.523 1.523 0 00-2.155-.004z"
          id="HomeOutlinedIcon_7952408621842264_a"
        ></path>
      </defs>
      <use
        fill="currentColor"
        fill-rule="nonzero"
        xlinkHref="#HomeOutlinedIcon_7952408621842264_a"
      ></use>
    </svg>
  );

  const expensesIcon = (
    <svg
      width="1.7em"
      height="1.7em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M18.682 18C19.41 18 20 17.384 20 16.625v-9.25C20 6.62 19.406 6 18.682 6H5.318C4.59 6 4 6.616 4 7.375v9.25C4 17.385 4.59 18 5.318 18h13.364zm.087 1H5.23C4 19 3 17.96 3 16.676V7.324C3 6.041 4 5 5.231 5H18.77C19.997 5 21 6.045 21 7.324v9.352C21 17.959 20 19 18.769 19zM6.5 15h5a.5.5 0 100-1h-5a.5.5 0 100 1z"
          id="CardOutlinedIcon_31959285949580396_a"
        ></path>
      </defs>
      <use
        fill="currentColor"
        transform="rotate(90 12 12)"
        xlinkHref="#CardOutlinedIcon_31959285949580396_a"
        fill-rule="evenodd"
      ></use>
    </svg>
  );

  const helpIcon = (
    <svg
      width="1.7em"
      height="1.7em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M12 1.5c5.799 0 10.5 4.702 10.5 10.5 0 5.8-4.7 10.5-10.5 10.5-5.798 0-10.5-4.701-10.5-10.5C1.5 6.202 6.202 1.5 12 1.5zm0 1a9.5 9.5 0 100 19 9.5 9.5 0 000-19zM12 15a.5.5 0 110 1 .5.5 0 010-1zm.21-7.67c1.407 0 2.273 1.042 2.273 2.1 0 .946-.333 1.432-1.179 2.135l-.052.044c-.672.559-.87.856-.87 1.516a.5.5 0 11-1 0c0-1.026.353-1.554 1.23-2.285l.052-.043c.639-.532.819-.794.819-1.367 0-.542-.463-1.1-1.272-1.1-.427 0-.787.19-1.092.52a2.123 2.123 0 00-.372.543.5.5 0 01-.917-.4c.095-.217.275-.518.554-.82.48-.521 1.09-.843 1.827-.843z"
          id="HelpCircleOutlinedIcon_5960557062750991_a"
        ></path>
      </defs>
      <use
        fill="currentColor"
        fill-rule="nonzero"
        xlinkHref="#HelpCircleOutlinedIcon_5960557062750991_a"
      ></use>
    </svg>
  );

  const userIcon = (
    <svg
      width="1.7em"
      height="1.7em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M18.374 7.25a1.626 1.626 0 010-3.25C19.27 4 20 4.73 20 5.625c0 .896-.73 1.625-1.626 1.625m-3.398 9.35a1.627 1.627 0 01-1.626-1.625 1.626 1.626 0 111.626 1.625M8.25 9.876a1.626 1.626 0 013.25 0 1.626 1.626 0 01-3.25 0M5.625 20a1.626 1.626 0 010-3.25c.896 0 1.625.73 1.625 1.625 0 .896-.729 1.625-1.625 1.625M18.374 3a2.627 2.627 0 00-2.624 2.625c0 .962.525 1.795 1.299 2.253l-1.613 4.518a2.676 2.676 0 00-.46-.046 2.62 2.62 0 00-1.469.45l-1.457-1.457a2.61 2.61 0 00.45-1.467A2.629 2.629 0 009.875 7.25 2.629 2.629 0 007.25 9.875c0 .846.409 1.59 1.032 2.072l-1.956 3.91a2.579 2.579 0 00-.701-.107A2.628 2.628 0 003 18.375 2.629 2.629 0 005.625 21a2.628 2.628 0 002.625-2.625 2.61 2.61 0 00-1.029-2.07l1.956-3.91c.223.063.455.106.698.106.544 0 1.049-.166 1.469-.45l1.456 1.456c-.284.42-.45.925-.45 1.469a2.628 2.628 0 002.626 2.624 2.628 2.628 0 002.624-2.625 2.62 2.62 0 00-1.232-2.216l1.622-4.548c.127.02.253.04.384.04A2.629 2.629 0 0021 5.626 2.628 2.628 0 0018.374 3"
          id="InvestmentsOutlinedIcon_14857814924797785_a"
        ></path>
      </defs>
      <use
        fill="currentColor"
        xlinkHref="#InvestmentsOutlinedIcon_14857814924797785_a"
        fill-rule="evenodd"
      ></use>
    </svg>
  );

  const menuIcon = (
    <svg
      width="1.5em"
      height="1.5em"
      aria-hidden="true"
      aria-label="menu"
      focusable="false"
      viewBox="0 0 24 24"
      class="c-pEEFS c-pEEFS-bfAFXs-size-md"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d='M3 19h18v-1H3v1Zm0-6h18v-1H3v1Zm0-7v1h18V6H3Z",",M3 19h18v-1H3v1Zm0-6h18v-1H3v1Zm0-7v1h18V6H3Z'
      ></path>
    </svg>
  );
  return (
    <section className={`${styles.menu_wrapper}`}>
      <div className={`${styles.menu}`}>
        <div className={`${styles.menu_header}`}>
          <div className={`${styles.avatar}`}>US</div>
          <span className={`${styles.username}`}>Nombre Apellido Usuario</span>
        </div>
        <NavbarButton icon={homeIcon} active>
          Inicio
        </NavbarButton>
        <NavbarButton icon={expensesIcon}> Gastos</NavbarButton>
        <NavbarButton icon={userIcon}> Mi perfil</NavbarButton>
        <NavbarButton icon={helpIcon}> Ayuda</NavbarButton>
      </div>
    </section>
  );
}
