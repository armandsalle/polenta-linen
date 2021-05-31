const SearchIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      {...props}
      className="search-icon"
    >
      <path
        d="M12.864 11.32h-.813l-.288-.277A6.66 6.66 0 0013.38 6.69a6.69 6.69 0 10-6.69 6.69 6.66 6.66 0 004.354-1.617l.278.289v.813L16.467 18 18 16.467l-5.136-5.146zm-6.174 0a4.625 4.625 0 01-4.632-4.63A4.625 4.625 0 016.69 2.058a4.625 4.625 0 014.63 4.632 4.625 4.625 0 01-4.63 4.63z"
        fill="#000"
      />
    </svg>
  )
}

export default SearchIcon
