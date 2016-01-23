'use strict mode';

let user = {
  name: 'Jason',
  age: 24,
  calorieTarget: 2000,
  meals : [
    {
      title: 'breakfast',
      date: '2015-06-25',
      description: 'Eggs, toast, and bacon',
      calories: 1100
    },
    {
      title: 'lunch',
      date: '2015-06-25',
      description: 'Ramen',
      calories: 1400
    },
    {
      title: 'lunch',
      date: '2015-06-24',
      description: 'Ramen',
      calories: 1400
    },
    {
      title: 'lunch',
      date: '2015-06-24',
      description: 'Ramen',
      calories: 2500
    }
  ],
  caloriesEatenOn : function(date){
    let calories = 0;
    for(let i = 0; i < this.meals.length; i++) {
      if (this.meals[i].date === date) {
        calories += this.meals[i].calories;
      }
    }
    return calories;
  },
  avgDailyCalories : function(){

    let uniqueDatesAsKeys = {}
    for(let i = 0; i < this.meals.length; i++) {
      uniqueDatesAsKeys[this.meals[i].date] = true;
    }
    let uniqueDatesArray = Object.keys(uniqueDatesAsKeys);

    let totalCalories = 0;

    // for(let i = 0; i < uniqueDatesArray; i++) {
    //   totalCalories += this.caloriesEatenOn(uniqueDatesArray[i]);
    // }
    for(let i = 0; i < this.meals.length; i++) {
      totalCalories += this.meals[i].calories;
    }

    return totalCalories / uniqueDatesArray.length;
  },
  onTrack : function(){
    let dailyCalories = this.avgDailyCalories();
    if(dailyCalories <=  this.calorieTarget) {
      return true;
    }
    else {
      return false;
    }
  }
}
