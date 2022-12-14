#node 기반 리눅스
FROM node:16-alpine 


#"RUN, "CMD", "ENTRYPOINT" 명령 실행될 작업 디렉토리
# RUN 이미지를 생성할 때 실행할 코드를 지정한다. 가장 높은 우선 순위
# CMD, ENTRYPOINT 이미지로 컨테이너를 생성 할 때 실행
# CMD는 변경가능, ENTRYPOINT 변경 불가능.


WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .
ENTRYPOINT [ "node", "bin/www.js" ]