'''
따옴표 3개를 하면 docString을 쉽게 쓸 수 있다. 
006 : 모듈 임포트
표준 라이브러리 : 파이썬에서 기본 제공하는 패키지 또는 모듈
다른 회사에서 만들었다면? = 3rd party library
'''

#import
import math
print(math.pi)

#필요 항목만 임포트 : from a import b
from math import pi
print(pi)

#별명 짓기 : import a as b
import math as m
print(m.pi)
