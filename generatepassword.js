Here's a JavaScript solution using Jest for testing:

*generatePassword.js*
```
function generatePassword(length, strength) {
  let chars = '';
  switch (strength) {
    case 'low':
      chars = 'abcdefghijklmnopqrstuvwxyz';
      break;
    case 'medium':
      chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      break;
    case 'high':
      chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';

  }
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

export default generatePassword;
```

*generatePassword.test.js*
```
import generatePassword from './generatePassword';

describe('generatePassword', () => {
  it('should generate a password with the correct length', () => {
    const password = generatePassword(10, 'low');
    expect(password.length).toBe(10);
  });

  it('should generate a password with only lowercase letters for low strength', () => {
    const password = generatePassword(10, 'low');
    expect(password).toMatch(/^[a-z]+$/);
  });

  it('should generate a password with letters and numbers for medium strength', () => {
    const password = generatePassword(10, 'medium');
    expect(password).toMatch(/^[a-zA-Z0-9]+$/);
  });

  it('should generate a password with letters, numbers, and special characters for high strength', () => {
    const password = generatePassword(10, 'high');
    expect(password).toMatch(/^[a-zA-Z0-9!@#$%^&*()_+~`|}{[]:;?><,./-]+$/);
  });

  it('should throw an error for invalid strength level', () => {
    expect(() => generatePassword(10, 'invalid')).toThrowError('Invalid strength level');
  });

  it('should throw an error for password length less than 1', () => {
    expect(() => generatePassword(0, 'low')).toThrowError('Password length must be greater than 0');
  });
});
```

This solution defines a `generatePassword` function that takes two parameters: `length` and `strength`. The function generates a password of the specified length using characters based on the chosen strength level. The strength levels are:

- `low`: only lowercase letters
- `medium`: letters and numbers
- `high`: letters, numbers, and special characters

The test cases cover the following scenarios:

- Password length validation
- Strength validation for each level
- Error handling for invalid strength levels and password lengths less than 1
