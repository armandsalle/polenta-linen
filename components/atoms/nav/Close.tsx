const Close = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      className="close-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 31 31"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 3.1L27.9 0 15.5 12.4 3.1 0 0 3.1l12.4 12.4L0 27.9 3.1 31l12.4-12.4L27.9 31l3.1-3.1-12.4-12.4L31 3.1z"
        fill="#111118"
      />
    </svg>
  )
}

export default Close
