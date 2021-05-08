export default {
  dictionary: {
    ko: {
      attributes: {
        username: '아이디',
        password: '비밀번호',
      },
      messages: {
        required: (field: string): string => `${field}를 입력해주세요.`,
      },
    },
  },
};
