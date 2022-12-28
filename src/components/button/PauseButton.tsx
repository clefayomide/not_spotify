

const PauseButton = (props: {
  backgroundColor: string;
  color: string;
  show: boolean;
  pause: any;
  
}) => {
  return (
    <div
      className={`${
        props.show ? "block" : "hidden"
      } w-[40px] h-[40px] cursor-pointer flex justify-center items-center rounded-full ${
        props.backgroundColor
      } ${props.color} shadow-md`}
      onClick={() => props.pause()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-pause-fill"
        viewBox="0 0 16 16"
      >
        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
      </svg>
    </div>
  );
};

export default PauseButton;
