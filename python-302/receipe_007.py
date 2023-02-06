'''
pip로 외부 라이브러리 설치하기
파이썬은 PyPi라는 3rd 파티 라이브러리 저장소를 무료 공개한다. 
PyPi에서 사용하고 싶은 라이브러리를 발견 시 pip 명령어로 설치, 삭제, 업데이트 등 패키지 관리를 할 수 있다. 
'''

# 라이브러리 설치
pip install requests

# 라이브러리 삭제
pip uninstall request

# 설치 라이브러리 목록 표시
pip freeze > requirements.txt

# 일괄 설치 및 삭제
pip install -r requirements.txt
pip uninstall -r requirements.txt