import classNames from "classnames";
import React from "react";

type CardBaseProps = {
  className?: string;
};

interface CardImageProps {
  src: string;
  alt: string;
  imageFull?: boolean;
  className?: string;
}

interface CardComposition {
  Title: React.FC<CardBaseProps>;
  Body: React.FC<CardBaseProps>;
  Image: React.FC<CardImageProps & CardBaseProps>;
  Actions: React.FC;
}

type CardProps = CardBaseProps;

const Card: React.FC<CardProps> & CardComposition = ({ children, className }) => {
  return <div className={classNames("card card-bordered bg-base-100 shadow-xl", className)}>{children}</div>;
};

Card.Title = function CardTitle({ children, className }) {
  return <h2 className={classNames("card-title", className)}>{children}</h2>;
};

Card.Body = function CardBody({ children, className }) {
  return <div className={classNames("card-body", className)}>{children}</div>;
};

Card.Image = function CardImage({ src, alt, imageFull, className }: CardImageProps) {
  return (
    <figure
      className={classNames(
        "figure",
        {
          "image-full": imageFull,
        },
        className
      )}
    >
      <img src={src} alt={alt} />
    </figure>
  );
};

Card.Actions = function CardActions({ children }) {
  return <div className="card-actions">{children}</div>;
};

export default Card;
