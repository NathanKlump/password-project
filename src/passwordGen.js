export function level1() {
    const length = 8;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let password = "";
  
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    return password;
  }
  
  export function level2() {
    const length = 10;
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
  
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    return password;
  }
  
  export function level3() {
    const length = 12;
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
  
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    return password;
  }
  
  export function level4() {
    const length = 16;
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";
    let password = "";
  
    password += uppercaseChars.charAt(
      Math.floor(Math.random() * uppercaseChars.length)
    );
    password += lowercaseChars.charAt(
      Math.floor(Math.random() * lowercaseChars.length)
    );
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += specialChars.charAt(
      Math.floor(Math.random() * specialChars.length)
    );
  
    const remainingLength = length - 4;
    const allChars = uppercaseChars + lowercaseChars + numbers + specialChars;
  
    for (let i = 0; i < remainingLength; i++) {
      password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
  
    return password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  }
  
  export function getRandomInt(min, max, secure) {
    if (secure) {
      return (crypto.getRandomValues(new Uint32Array(1))[0] % (max - min)) + min;
    }
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  export function level5() {
    const length = 24;
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";
    let password = "";
  
    const secure = typeof crypto !== "undefined" && crypto.getRandomValues;
  
    for (let i = 0; i < length; i++) {
      const charType = getRandomInt(0, 4, secure);
  
      if (charType === 0) {
        password += uppercaseChars.charAt(
          getRandomInt(0, uppercaseChars.length, secure)
        );
      } else if (charType === 1) {
        password += lowercaseChars.charAt(
          getRandomInt(0, lowercaseChars.length, secure)
        );
      } else if (charType === 2) {
        password += numbers.charAt(getRandomInt(0, numbers.length, secure));
      } else {
        password += specialChars.charAt(
          getRandomInt(0, specialChars.length, secure)
        );
      }
    }
  
    return password;
  }
  