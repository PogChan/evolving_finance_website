// Libs
import { CSSProperties, FC, memo, MouseEvent } from 'react'
import Image from 'next/image'
import { ImageProps } from 'next/dist/client/image'

// Interface
interface ILazyImage {
  src: ImageProps['src']
  width?: ImageProps['width']
  height?: ImageProps['height']
  objectFit?: ImageProps['objectFit']
  layout?: ImageProps['layout']
  loading?: ImageProps['loading']
  quality?: ImageProps['quality']
  placeholder?: ImageProps['placeholder']
  className?: string
  style?: CSSProperties
  onClick?: (e: MouseEvent<HTMLImageElement>) => void
}

// Component
const LazyImage: FC<ILazyImage> = ({
  src,
  width,
  height,
  objectFit = 'cover',
  layout = 'intrinsic',
  loading = 'lazy',
  quality = 100,
  placeholder = 'blur',
  className,
  style,
  onClick,
}) => {
  return (
    <Image
      width={width}
      height={height}
      objectFit={objectFit}
      src={src}
      alt={''}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={src.toString()}
      layout={layout}
      loading={loading}
      className={className}
      style={style}
      onClick={onClick}
    />
  )
}

export default memo(LazyImage)
