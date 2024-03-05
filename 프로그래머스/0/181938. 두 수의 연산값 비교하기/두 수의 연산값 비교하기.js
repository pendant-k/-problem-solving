function solution(a, b) {
    let new_op = Number(a.toString()+b.toString());
    let op = 2 * a * b;
    return new_op >= op ? new_op : op;
}