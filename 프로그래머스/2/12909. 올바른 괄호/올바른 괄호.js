function solution(s){
    // stack for checking
    const stack = [];
    
    for(const c of s){
        
        // when stack is empty
        if(stack.length < 1){
            if(c === "("){
            	console.log("Push (")
        		stack.push(c);
            } else {
                return false;
            }
            continue;
        }
        
        // when stack has item
        if(c === "(") {
            stack.push(c);
        } else {
            // c === ")"
            const lastIndex = stack.length - 1;
            const top = stack[lastIndex];
            if(top === "(") {
                stack.pop();
            }
        }
    }
    

    return stack.length === 0;
}