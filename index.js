function scuberGreetingForFeet(distanceInFeet) {
  let greeting;

  if (distanceInFeet <= 400) {
    greeting = 'This one is on me!';
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    greeting = 'That will be twenty bucks.';
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (distanceInFeet > 2500) {
    greeting = 'No can do.';
  }

  return greeting;
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}


