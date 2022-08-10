function toCamelCase(str){
    return str.replace(/(_|-)./g, m => m.substr(1, 1).toUpperCase());
  }