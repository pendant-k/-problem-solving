from collections import deque

def solution(bridge_length, weight, truck_weights):
    wait = deque(truck_weights)  # 대기 트럭
    progress = deque([0] * bridge_length)  # 다리 상태
    done = []  # 완료된 트럭
    current_weight = 0  # 다리 위 트럭의 총 무게
    left = 0  # 경과 시간

    while len(done) < len(truck_weights):
        left += 1
        
        # 다리에서 트럭을 하나 내보냄
        truck = progress.popleft()
        if truck > 0:
            current_weight -= truck  # 현재 무게에서 제거
            done.append(truck)
        
        # 다음 트럭을 다리에 올릴 수 있는지 확인
        if wait:
            if current_weight + wait[0] <= weight:
                truck = wait.popleft()
                progress.append(truck)
                current_weight += truck  # 현재 무게에 추가
            else:
                progress.append(0)  # 트럭이 못 올라가면 빈 공간 유지

    return left