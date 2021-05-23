declare namespace Kakao {
  export class init {
    constructor(key: string | undefined);
  }
}

declare namespace Kakao.Link {
  export function sendDeafult(
    objectType: string,
    content: {
      title: string;
      imageUrl: string;
      link?: {
        webUrl?: string;
        mobileUrl?: string;
        androidExecParams?: string;
        iosExecParams?: string;
      };
      imageWidth?: number;
      imageHeight?: number;
      description?: string;
    },
    address: string,
    addressTitle?: string,
    buttonTitle?: string,
    buttons?: [],
    installTalk?: boolean = false,
    callback?: () => void,
    serverCallbackArgs?: string,
  ): void;
}
