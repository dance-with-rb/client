export default {
  dictionary: {
    ko: {
      attributes: {
        username: '아이디',
        password: '비밀번호',
        vocTitle: '문의명',
        vocContent: '문의내용',
        vocAuthor: '작성자명',
        replyEmail: '이메일 주소',
      },
      messages: {
        required: (field: string): string => `${field}을(를) 입력해주세요.`,
        email: (): string => `이메일 형식을 확인해주세요.`,
      },
    },
  },
};
