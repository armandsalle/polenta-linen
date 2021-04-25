import classNames from 'classnames'
import Image from 'next/image'

type ResponsiveImageProps = {
  className: string
  src: string
  alt: string
}

const ResponsiveImage = ({
  className,
  src,
  alt,
}: ResponsiveImageProps): JSX.Element => {
  return (
    <div className={classNames('image-wrapper', className)}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  )
}

export default ResponsiveImage
