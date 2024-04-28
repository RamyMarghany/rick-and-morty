export const Image: React.FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
}> = ({ src, alt, width, height }) => {
  return (
    <picture>
      <source
        type={`${src}.jpeg`}
        srcSet={`
            /${src}.jpeg?w=100 100w, 
            /${src}.jpeg?w=200 200w, 
            /${src}.jpeg?w=400 400w, 
            /${src}.jpeg?w=800 800w`}
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        role="presentation"
        decoding="async"
        sizes="(max-width:800px) 100vw, 50vw"
        width={width}
        height={height}
      />
    </picture>
  );
};
