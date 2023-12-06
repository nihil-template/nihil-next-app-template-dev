export class configData {
  static title = '사이트 이름';
  static description = '사이트 설명';
  static keywords = '';
  static author = {
    name: 'NIHILncunia',
    url: 'https://github.com/NIHILncunia',
  };
  static type = 'website';
  static url = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://nihilapps.dev';
  static image = '';
  static version = 'v0.0.0';
  static apiBase = `${this.url}/api`;
}
