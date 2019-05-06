export const push = [
  { name: 'Dumbbell chest press', link:'https://www.bodybuilding.com/exercises/dumbbell-bench-press'},
  { name: 'Incline dumbbell press', link:'https://www.bodybuilding.com/exercises/incline-dumbbell-press'},
  { name: 'Barbell bench press', link:'https://www.bodybuilding.com/exercises/barbell-bench-press-medium-grip'},
  { name: 'Shoulder press', link:'https://www.bodybuilding.com/exercises/seated-dumbbell-press'},
  { name: 'Dumbbell chest fly', link:'https://www.bodybuilding.com/exercises/dumbbell-flyes'},
  { name: 'Bodyweight dip (assisted optional)', link:'https://www.bodybuilding.com/exercises/dips-chest-version'},
  { name: 'Wide-grip push-up', link:'https://www.bodybuilding.com/exercises/pushups'},
  { name: 'Lateral shoulder raise', link:'https://www.bodybuilding.com/exercises/power-partials'},
];

export const pull = [
  { name: 'Pull-up (assisted optional)', link:'https://www.bodybuilding.com/exercises/pullups'},
  { name: 'Chin-up (assisted optional)', link:'https://www.bodybuilding.com/exercises/chin-up'},
  { name: 'Overhead lat pull-down', link:'https://www.bodybuilding.com/exercises/wide-grip-lat-pulldown'},
  { name: 'Standing barbell row', link:'https://www.bodybuilding.com/exercises/bent-over-barbell-row'},
  { name: 'One-arm dumbbell row', link:'https://www.bodybuilding.com/exercises/one-arm-dumbbell-row'},
  { name: 'Seated row', link:'https://www.bodybuilding.com/exercises/seated-cable-rows'},
  { name: 'Straight-arm pull-down', link:'https://www.bodybuilding.com/exercises/rope-straight-arm-pulldown'},
  { name: 'Alternating renegade row', link:'https://www.bodybuilding.com/exercises/alternating-renegade-row'},
];

export const core = [
  { name: 'Forearm plank', link:'https://www.bodybuilding.com/exercises/plank'},
  { name: 'Side plank', link:'https://www.bodybuilding.com/exercises/side-bridge'},
  { name: 'Hanging leg raise', link:'https://www.bodybuilding.com/exercises/hanging-leg-raise'},
  { name: 'V-up crunch', link:'https://www.bodybuilding.com/exercises/jackknife-sit-up'},
  { name: 'Russian twist', link:'https://www.bodybuilding.com/exercises/plate-twist'},
  { name: 'Burpees', link:'https://www.bodybuilding.com/exercises/burpee'},
  { name: 'Push-up', link:'https://www.bodybuilding.com/exercises/pushups'},
  { name: 'Supine leg lift', link:'https://www.bodybuilding.com/exercises/flat-bench-lying-leg-raise'},
];

export const legs = [
  { name: 'Barbell squat', link:'https://www.bodybuilding.com/exercises/barbell-full-squat'},
  { name: 'Barbell deadlift', link:'https://www.bodybuilding.com/exercises/barbell-deadlift'},
  { name: 'Box squat', link:'https://www.bodybuilding.com/exercises/box-squat'},
  { name: 'Walking lunge', link:'https://www.bodybuilding.com/exercises/barbell-walking-lunge'},
  { name: 'Single leg glute bridge', link:'https://www.bodybuilding.com/exercises/single-leg-glute-bridge-'},
  { name: 'Box jump', link:'https://www.bodybuilding.com/exercises/front-box-jump'},
  { name: 'Goblet squat', link:'https://www.bodybuilding.com/exercises/dumbbell-goblet-squat'},
  { name: 'Single leg press', link:'https://www.bodybuilding.com/exercises/single-leg-press'},
];

export const cardio = [
  { name: 'Treadmill run', link:'https://www.bodybuilding.com/exercises/jogging-treadmill'},
  { name: 'Treadmill hike', link:'https://www.bodybuilding.com/exercises/walking-treadmill'},
  { name: 'Elliptical', link:'https://www.bodybuilding.com/exercises/elliptical-trainer'},
  { name: 'Rowing machine', link:'https://www.bodybuilding.com/exercises/rowing-stationary'},
  { name: 'Stationary bike', link:'https://www.bodybuilding.com/exercises/bicycling-stationary'},
  { name: 'Stair climber', link:'https://www.bodybuilding.com/exercises/stairmaster'},
];

const focusSelector = (focus) => {
  switch (focus) {
    case 'Upper-body push':
      return push.slice();
    case 'Upper-body pull':
      return pull.slice();
    case 'Core':
      return core.slice();
    case 'Legs':
      return legs.slice();
    default: null;
  }
}

const exerciseCompiler = (exercises, num) => {
  let workout = [];
  workout.push(cardio[Math.floor(Math.random() * cardio.length)]);

  for (let i = 0; i < num; i++) {
    let index = Math.floor(Math.random() * exercises.length);
    workout.push(exercises[index]);
    exercises.splice(index, 1);
  }

  return workout;
}

export const workoutGenerator = (duration, focus) => {
  let exercises = focusSelector(focus);

  if (duration === '30') {
    return exerciseCompiler(exercises, 3);
  } else if (duration === '45') {
    return exerciseCompiler(exercises, 4);
  } else if (duration === '60') {
    return exerciseCompiler(exercises, 5);
  } else {
    return null;
  }
}
