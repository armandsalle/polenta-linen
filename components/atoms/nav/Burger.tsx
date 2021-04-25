const Burger = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      className="burger"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 20"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 19.334h29.001V16.11H0v3.223zm0-8.056h29.001V8.056H0v3.222zM0 0v3.222h29.001V0H0z"
        fill="#111118"
      />
    </svg>
  )
}

export default Burger
