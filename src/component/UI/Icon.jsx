export function Calender({ style }) {
  return (
    <svg
      className={style}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      xml:space="preserve"
      width="64px"
      height="64px"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <style type="text/css"> {`.st0{fill:none;}`}</style>{" "}
        <path d="M6,2v2H5C3.9,4,3,4.9,3,6v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2h-1V2h-2v2H8V2H6z M5,9h14v11H5V9z M12,13v5h5v-5H12z"></path>{" "}
        <rect className="st0" width="24" height="24"></rect>{" "}
        <rect class="st0" width="24" height="24"></rect>{" "}
      </g>
    </svg>
  );
}
export function Plus({ style, fill }) {
  return (
    <svg
      className={style}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 0V6H0V8H6V14H8V8H14V6H8V0H6Z"
        fill={fill}
      />
    </svg>
  );
}
export function Pen({ style, fill }) {
  return (
    <svg
      className={style}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 14.25V18H3.75L14.7997 6.95021L11.0497 3.20031L0 14.25ZM17.7001 4.04992C18.1 3.65003 18.1 3.04989 17.7001 2.65L15.35 0.299918C14.9501 -0.0999727 14.35 -0.0999727 13.9501 0.299918L12.1 2.15003L15.85 5.89993L17.7001 4.04992Z"
        fill={fill}
      />
    </svg>
  );
}
export function Garbage({ style, fill }) {
  return (
    <svg
      className={style}
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 16.0045C2 17.1022 2.89991 18 4.00002 18H12C13.1001 18 14 17.1022 14 16.0045V4.5H2V16.0045ZM15.5 1.5H11.75L10.4945 0H5.50559L4.25 1.5H0.5V3H15.5V1.5Z"
        fill={fill}
      />
    </svg>
  );
}
