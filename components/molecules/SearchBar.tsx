import Close from '@/components/atoms/nav/Close'
import SearchIcon from '@/components/atoms/search/SearchIcon'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import {
  useEffect,
  useState,
  useCallback,
  FormEvent,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react'

type SearchBarProps = {
  searchMode: boolean
  setSearchMode: Dispatch<SetStateAction<boolean>>
}

const SearchBar = ({
  searchMode,
  setSearchMode,
}: SearchBarProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>()

  const router = useRouter()
  const [input, setInput] = useState<string>('')

  const handleSearchSubmit = useCallback(() => {
    router.push(`/search?q=${encodeURIComponent(input.toLowerCase())}`)
  }, [input])

  const handleSearchFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      handleSearchSubmit()
    },
    [handleSearchSubmit]
  )

  useEffect(() => {
    if (searchMode) {
      inputRef.current.focus()
    }
  }, [searchMode])

  return (
    <header
      className={classNames(
        'header header--search',
        'header__background--search'
      )}
    >
      <Close onClick={() => setSearchMode(false)}>Close</Close>
      <form onSubmit={handleSearchFormSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here"
        />
      </form>
      <SearchIcon onClick={handleSearchSubmit} />
    </header>
  )
}

export default SearchBar
