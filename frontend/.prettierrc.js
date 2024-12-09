module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true, // 객체 리터럴의 괄호 사이에 공백 추가
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  endOfLine: 'auto',
  
  // 줄바꿈과 공백 관련 추가 설정
  jsxBracketSameLine: false, // JSX 닫는 괄호를 새 줄에 배치
  jsxSingleQuote: false,
  htmlWhitespaceSensitivity: 'strict', // HTML 공백 감도 설정
  proseWrap: 'preserve', // 마크다운 텍스트 줄바꿈 보존
  
  // 객체, 배열 등의 후행 쉼표 설정
  trailingComma: 'all',
  
  // import 순서 설정
  importOrder: [
    '^react$',
    '^react-native$',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};