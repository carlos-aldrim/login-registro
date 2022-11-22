export const validateEmail = (email: string) => {
  if (email === "") {
    return false;
  }
  else {
    let sampleRegExEmail = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/);
    return sampleRegExEmail.test(email);
  }
}

export const validateName = (name: string) => {
  if (name === "") {
    return false;
  }
  else {
    let sampleRegExName = new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/);
    return sampleRegExName.test(name);
  }
};

export const validateTypeCharacters = (password: string) => {
  if (password === "") {
    return false;
  }
  else {
    let sampleRegExTypeCharacteres = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]+$/);
    return sampleRegExTypeCharacteres.test(password);
  }
};

export const validateLenght = (password: string) => {
  if (password === "") {
    return false;
  }
  else {
    let sampleRegExLenght = new RegExp(/^[0-9a-zA-Z$*&@#]{8,16}$/);
    return sampleRegExLenght.test(password);
  }
};

export const validateSequence = (password: string) => {
  if (password === "") {
    return false;
  }
  else {
    let sampleRegExSequenceNumbers = new RegExp(/([0-9]){2,}/);
    let sampleRegExSequenceLetters =  new RegExp(/([A-Za-z]{2,})/);
    if(!sampleRegExSequenceNumbers.test(password) && !sampleRegExSequenceLetters.test(password)) {
      return true;
    }
    else {
      return false;
    }
  }
};

export const validatePassword = (password: string) => {
  if (password === "") {
    return false;
  }
  else {
    return validateTypeCharacters(password) && validateLenght(password) && validateSequence(password);
  }
} ;