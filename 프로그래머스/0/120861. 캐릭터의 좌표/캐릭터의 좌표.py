def solution(keyinput, board):
    pos = [0,0]
    x_mx = board[0] //2
    y_mx = board[1] //2
    for inp in keyinput:
        if inp == "left":
            if pos[0] == -x_mx:
                pass
            else:
                pos[0] -=1
        elif inp == "right":
            if pos[0] == x_mx:
                pass
            else:
            	pos[0] +=1
        elif inp == "up":
            if pos[1] == y_mx:
                pass
            else:
            	pos[1] +=1
        elif inp == "down":
            if pos[1] == -y_mx:
                pass
            else:
                pos[1] -=1
            
    return pos