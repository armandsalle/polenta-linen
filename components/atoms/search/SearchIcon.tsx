const SearchIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      className="search-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      {...props}
    >
      <path
        d="M19.479 17.141h-1.232l-.436-.42a10.084 10.084 0 002.447-6.592C20.258 4.535 15.723 0 10.128 0 4.536 0 0 4.535 0 10.129c0 5.594 4.535 10.129 10.129 10.129 2.509 0 4.815-.92 6.591-2.447l.421.436v1.232l7.791 7.775 2.322-2.322-7.776-7.79zm-9.35 0a7.003 7.003 0 01-7.012-7.012 7.003 7.003 0 017.012-7.012 7.003 7.003 0 017.012 7.012 7.003 7.003 0 01-7.012 7.012z"
        fill="#000"
      />
    </svg>
  )
}

export default SearchIcon
