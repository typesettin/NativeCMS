
export default {
  pipelines: {
    all: {
      // BASE_URL: 'https://pas-dev.promisefinancial.net:8885/pas/data/v2/',
      BASE_URL: 'https://pas-development.promisefinancial.net/pas/data/v2/',
    },
    engines: {
      GET_INDEX:'engines',
      POST_NEW:'engines',
      POST_UPDATE:'engines/',
    },
    resources: {
      GET_INDEX:'resources',
      POST_NEW:'resources',
      POST_UPDATE:'resources/',
    },
    parsers: {
      GET_INDEX:'parsers',
      POST_NEW:'parsers',
      POST_UPDATE:'parsers/',
    },
    segments: {
      GET_INDEX:'segments',
      POST_NEW:'segments',
      POST_UPDATE:'segments/',
    },
    customers: {
      GET_INDEX:'customers',
    },
    applications: {
      GET_INDEX:'applications',
    },
    items: {
      GET_INDEX:'items?format=json',
      POST_UPDATE:'items/',
    },
  },
};
