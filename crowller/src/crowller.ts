// import superagent from 'superagent';
const request = require('superagent')
require('superagent-charset')(request);

class Crowller {
  private url: string;
  private charset: string;
  private rawHtml: string = '';
  constructor(url: string, charset: string) {
    this.url = url;
    this.charset = charset;
    this.getRawHtml();
  }
  async getRawHtml() {
    try {
      // 解决了当前https报的self signed certificate in certificate chain问题。
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
      const result = await request.get(this.url).charset(this.charset);
      if (result) {
        this.rawHtml = result.text;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}

new Crowller('https://www.ctrip.com/', 'gb2312');

// https://www.ctrip.com/