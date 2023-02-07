'''
python 기본 변수

1. 수치
bool
int 
float

2. 컬렉션 : 여러 데이터를 저장할 수 있는 변수 타입
2.1. sequence = array = 데이터 순서대로 나열, 데이터에 index가 있음
-bytes
-tuple
-str
-range
-list
2.2. set : 순서 없는 데이터 집합, 중복없음
-set
2.3. mapping : key와 value를 가진 데이터 모은것,
- dict

3. iterable : 반복 처리할수 있는 특성, 대부분 컬렉션은 이터러블, for문으로 반복처리 가능
'''
nums = [3, 2, 8, 1]
for x in nums:
    print(x)

'''
immutable vs mutable
-한번 생성후 변경 가능 여부
'''