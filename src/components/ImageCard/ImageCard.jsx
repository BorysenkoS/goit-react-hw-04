const ImageCard = ({ url, alt }) => {
  return (
    <div>
      <img src={url} alt={alt} width={320} height={220} />
    </div>
  );
};

export default ImageCard;
