type RatingStarsProps = {
  rating: number;
  max?: number;
};

export function RatingStars({ rating, max = 5 }: RatingStarsProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, index) => {
        const isFilled = index < rating;
        return (
          <i
            key={index}
            className={`fas fa-star ${isFilled ? 'text-primary' : 'text-gray-300'}`}
          ></i>
        );
      })}
    </div>
  );
}

