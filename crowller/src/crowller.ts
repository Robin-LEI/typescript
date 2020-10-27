// import superagent from 'superagent';
import cheerio from 'cheerio';
const request = require('superagent');
require('superagent-charset')(request);
const fs = require('fs');
const path = require('path');


// fs.writeFileSync(filePath, 1);

// fs.exists(filePath, (exists:boolean) => {
//   if (!exists) {
//     // 不存在，创建目录
//     fs.mkdir(filePath, (err: string) => {
//       if (err) {
//         throw new Error(err);
//       }
//       console.log('创建成功')
//     });
//     console.log(1111)
//   }
//   console.log(exists)
// });



// function test() {
//   let bool = pathISExists(filePath);
//   if (!bool) {
//     createPath(filePath);
//   }
//   fs.writeFileSync(filePath + '/data.json', 1222)
//   console.log(11, bool)
// }

// test()

function createPath(filePath: string) {
  try {
    return fs.mkdirSync(filePath);
  } catch (error) {
    return false;
  }
}
function pathISExists(filePath: string) {
  try {
    return fs.statSync(filePath);
  } catch (error) {
    return false;
  }
}

interface A {
  href: string;
  text: string;
}

interface PushData {
  time: number;
  data: A[];
}

interface Footers {
  [propName: number]: A[];
}

class Crowller {
  private url: string;
  private charset: string;
  private rawHtml: string = '';
  private filePath = path.resolve(__dirname, '../data');
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
        this.getProductInfos(this.rawHtml);
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  getProductInfos(html: string) {
    let pushData: PushData;
    const $ = cheerio.load(html);
    let footerItems = $('.ft-link-item a');
    let result: A[] = [];
    footerItems.map((index, element) => {
      let text = $(element).text() || ''
      let href = $(element).attr('href') || ''
      if (text.trim()) {
        result.push({
          href,
          text
        });
      }
    });
    pushData = {time: new Date().getTime(), data: result};

    // 判断目录是否存在，如果存在，先读取数据，再把这次新的数据写入，如果不存在，先创建目录，在写入
    let bool = pathISExists(this.filePath);
    if (!bool) {
      createPath(this.filePath);
    } else {
      
    }
    console.log()
  }
}

new Crowller('https://www.ctrip.com/', 'gb2312');

// https://www.ctrip.com/