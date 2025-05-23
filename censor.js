// censor.js

(() => {
  const replacements = {
    "job": "j*b",
    "jobs": "j*bs",
    "career": "c****r",
    "careers": "c****rs",
    "employment": "e****mnt",
    "employer": "e*****er",
    "employee": "e*****ee",
    "employees": "e*****ees",
    "salary": "s****y",
    "wage": "w***",
    "occupation": "o********n",
    "workplace": "w*******e",
    "position": "p******n",
    "vacancy": "v*****y",
    "hire": "h**e",
    "hiring": "h*****g",
    "recruit": "r*****t",
    "recruiter": "r*******r",
    "internship": "i********p",
    "interview": "i*******w",
    "resume": "r****e",
    "cv": "c*",
    "payroll": "p*****l",
    "freelance": "f*******e"
  };

  function censorText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let text = node.nodeValue;
      Object.keys(replacements).forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        text = text.replace(regex, match => {
          const censored = replacements[word];
          return match[0] === match[0].toUpperCase()
            ? censored.charAt(0).toUpperCase() + censored.slice(1)
            : censored;
        });
      });
      node.nodeValue = text;
    } else {
      node.childNodes.forEach(censorText);
    }
  }

  if (document.body) censorText(document.body);
})();
