# Next.js 14 썸네일 생성기

블로그나 웹사이트에서 사용할 수 있는 썸네일을 쉽게 생성할 수 있는 웹 애플리케이션입니다. Next.js 14를 기반으로 제작되었으며, 직관적인 인터페이스를 통해 손쉽게 썸네일을 만들 수 있습니다.

## 주요 기능
- **실시간 미리보기**: 입력하는 내용이 즉시 캔버스에 반영되어 결과물을 바로 확인할 수 있습니다.
- **커스터마이징**: 제목, 부제목, 배경색, 글자색 등을 자유롭게 설정할 수 있습니다.
- **시리즈 지원**: 시리즈 번호를 추가하여 연속된 콘텐츠의 썸네일을 제작할 수 있습니다.

## 스택
- **상태 관리**: `zustand`를 사용하여 썸네일 설정 상태를 효율적으로 관리합니다.
- **스타일링**: `styled-components`, `tailwindcss`를 사용하여 모던한 UI를 구현합니다.
- **캔버스 처리**: HTML5 Canvas API를 활용하여 고품질 썸네일을 생성합니다.

## 설치 및 실행
1. **레포지토리 클론**:
   ```bash
   git clone https://github.com/your-username/thumbnail-generator.git
   cd thumbnail-generator
   ```

2. **패키지 설치**:
   ```bash
   yarn install
   ```

3. **개발 서버 실행**:
   ```bash
   yarn run dev
   ```

   브라우저에서 `http://localhost:3000`을 열어 결과를 확인하세요.

## 디렉토리 구조
@app
  /_components     # 재사용 가능한 UI 컴포넌트
  /_data          # 색상 데이터 등의 정적 데이터
  /_entities      # 썸네일 상태 관리 관련 타입 정의
  /_hooks         # 썸네일 상태 관리 훅
  /_styles        # 전역 스타일 및 테마 설정
  /_layouts       # 레이아웃 컴포넌트
  /(thumbgen)     # 썸네일 생성기 관련 페이지 및 컴포넌트
