const PlayButton = (props: {
  backgroundColor: string;
  color: string;
  show: boolean;
}) => {
  return (
    <div
      className={`${
        props.show ? "block" : "hidden"
      } w-[40px] h-[40px] cursor-pointer flex justify-center items-center rounded-full ${
        props.backgroundColor
      } ${props.color} shadow-md`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-play-fill"
        viewBox="0 0 16 16"
      >
        <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
      </svg>
    </div>
  );
};

export default PlayButton;
