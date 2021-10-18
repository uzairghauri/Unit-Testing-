// Define food
Food = {};

// Return a breakfast call
Food.announceBreakfast = () => {
  return 'Time for Breakfast';
}

// Return hour as string
// Throws Error if hour is not between 6 and 12 inclusive
Food.breakfastTime = (hour) => {
  if (hour <= 6 || hour >= 12) {
    throw new RangeError;
  } else {
    return hour.toString();
  };
}

module.exports = Food;