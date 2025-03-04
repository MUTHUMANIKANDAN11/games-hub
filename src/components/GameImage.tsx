interface Props {
  image: string;
}

const GameImage = ({ image }: Props) => {
  return <img src={image} className="col card-img-top" alt="..." />;
};

export default GameImage;
