
const StarRating = ({ rate }) => {
    const filledStars = Math.round(rate); // Округляем рейтинг до ближайшего целого
    const emptyStars = 5 - filledStars; // Вычисляем количество пустых звезд
  
    return (
      <div className="d-flex justify-content-center small text-warning mb-2">
        {[...Array(filledStars)].map((_, index) => (
          <div key={index} className="bi bi-star-fill"></div>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <div key={index} className="bi bi-star"></div>
        ))}
      </div>
    );
  };
  export default StarRating;