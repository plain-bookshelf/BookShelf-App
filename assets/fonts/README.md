# Pretendard 폰트

이 폴더에 Pretendard 폰트 파일을 넣어주세요.

1. [Pretendard 릴리스](https://github.com/orioncactus/pretendard/releases)에서 **Static OTF** 또는 **Static TTF**를 다운로드
2. 압축 해제 후 아래 파일들을 이 폴더에 복사:
   - `Pretendard-Regular.otf` (또는 .ttf)
   - `Pretendard-Medium.otf`
   - `Pretendard-SemiBold.otf`
   - `Pretendard-Bold.otf`
3. 터미널에서 `npx react-native-asset` 실행 (또는 앱 재빌드)

파일명이 다르면 `src/styles/fontStyle.ts`의 폰트 패밀리 이름을 실제 파일명(확장자 제외)에 맞게 수정하세요.
