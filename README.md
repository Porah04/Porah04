
enum Strength {
  LOW,
  MEDIUM,
  HIGH,
}

function generatePassword(length: number, strength: Strength): string {
  let characters: string;

  switch (strength) {
    case Strength.LOW:
      characters = 'abcdefghijklmnopqrstuvwxyz';
      break;
    case Strength.MEDIUM:
      characters =
        'mynameisPEACEopelusideborah123456789!@#$%^&*()_+';
      break;
    case Strength.HIGH:
      characters =
        'mynameisPEACEopelusideborah0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
      break;
    default:
      throw new Error('Invalid strength level');
  }

  if (length < 8) {
    throw new Error('Password length must be at least 8 characters');
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

// Example usage:
console.log(generatePassword(12, Strength.LOW));
console.log(generatePassword(12, Strength.MEDIUM));
console.log(generatePassword(12, Strength.HIGH));
```
...............................
enum Strength {
  LOW,
  MEDIUM,
  HIGH,
}

function generatePassword(length: number, strength: Strength): string {
  // ...
}

// Example usage:
console.log(generatePassword(12, Strength.LOW));
console.log(generatePassword(12, Strength.MEDIUM));
console.log(generatePassword(12, Strength.HIGH));
