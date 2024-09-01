interface MailProps {
  color?: string;
  bgColor?: string;
  width?: string;
  height?: string;
}

const Mail = ({
  color = "white",
  bgColor = "none",
  width,
  height,
}: MailProps) => {
  return (
    <svg
      width={width || "22"}
      height={height || "18"}
      viewBox="0 0 22 18"
      fill={bgColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.7778 0.5H4.22222C2.99667 0.5 2 1.4568 2 2.63333V7.96667H4.22222V4.76667L11.3333 9.88667C11.5257 10.025 11.7596 10.0997 12 10.0997C12.2404 10.0997 12.4743 10.025 12.6667 9.88667L19.7778 4.76667V14.3667H10.8889V16.5H19.7778C21.0033 16.5 22 15.5432 22 14.3667V2.63333C22 1.4568 21.0033 0.5 19.7778 0.5ZM12 7.7L4.96222 2.63333H19.0378L12 7.7Z"
        fill={color}
      />
      <path
        d="M0 9.5H7.77778V11.5H0V9.5ZM2.22222 12.5H8.88889V14.5H2.22222V12.5ZM5.55556 15.5H10V17.5H5.55556V15.5Z"
        fill={color}
      />
    </svg>
  );
};

export default Mail;
