
type RatingProps = {
  rating: number;
}
export default function Rating({ rating }: RatingProps) {
  //to have stars i need an array of length of rating
   // I need to create this array
   const generateStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < Math.round(rating); i++) {
      stars.push(i);
    }
    return stars;
  };

  const fillStars = generateStars(rating); 
  // rating 4.2 => [0,1,2,3]
  // rating 3.3 => [0,1,2]
  const unFilledStars = generateStars(5 - rating); 
  // rating 4.2 => [0]
  // rating 3.3 => [0,1]
  
  //way2 :       Array.from :creat array i what i need to do 
  // if there is a mandatory parameter in any function and if you dont want to use it you can use _ as a placeholder
  const fillStars2 = Array.from({ length: Math.round(rating) }, (_, i) => i);
  const unFilledStars2 = Array.from(
    { length: 5 - Math.round(rating) },
    (_, i) => i
  );
  return (
    <>
      {fillStars.map((item) => (
        <i key={item} className="bi bi-star-fill text-yellow-300 mr-1"></i>
      ))}
      {unFilledStars.map((item) => (
        <i key={item} className="bi bi-star-fill text-gray-200 mr-1"></i>
      ))}

      <span className="bg-blue-100 text-blue-800 text-sm font-semibold mx-2 px-2.5 py-0.5 dark:bg-blue-200">
        {rating.toFixed(1)}
      </span>
    </>
  );
}
