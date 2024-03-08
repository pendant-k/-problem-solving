function solution(q, r, code) {
    return code.split("").filter((e,idx)=> idx % q === r).join("");
}