import React from "react";
const TodayDate = () => {
  const today= new Date();
  const FormattedDate = today.toLocaleDateString(undefined,{
    year: 'numeric',
    month:'long',
    day: 'numeric'
  });
  return(
    <div>
      {FormattedDate}
    </div>
  );
};
export default TodayDate