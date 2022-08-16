function validParentheses(parens) {
    const stack = [];
    const characters = { ')': '(', '}': '{', ']': '['};
  for (const char of parens) {
        
      if (!characters[char]){
         stack.push(char); 
      } 
      else if (stack.pop() !== characters[char]){
          return false;
      } 
    }
    return stack.length === 0;
  }