#node 기반 리눅스
FROM node:16-alpine 


#"RUN, "CMD", "ENTRYPOINT" 명령 실행될 작업 디렉토리
WORKDIR /app

#파일복사
COPY package.json package-lock.json ./

#package에 딱 맞는 버전만 설치
RUN npm ci

COPY . .

#컨테이너 시작 되었을 때 실행한 스크립트
ENTRYPOINT [ "node", "bin/www.js" ]