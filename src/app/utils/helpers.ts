import { DataQuery } from '../interfaces/query';

export class Helpers {

  queryBuilder(dataQuery: DataQuery) {
    const query = {
      query: `
        ${dataQuery.type} {
          ${dataQuery.operation} ${this.detectedMutation(dataQuery.type, dataQuery.data)} {
            ${dataQuery.fields.join(',')}
          }
        }
      `,
      variables: ''
    };
    return query;
  }

  private detectedMutation(type: string, data: {} = {}) {
    if (type === 'mutation') {
      return `(input: {
        ${this.inputBuilder(data)}
      })`;
    } else {
      return '';
    }
  }

  private inputBuilder(data: {}) {
    let result = '';
    new Map(Object.entries(data)).forEach((value, key) => {
      result += `${key}: ${this.getType(value)}, \n`;
    });
    return result;
  }

  private getType(data) {
    if (typeof data === 'string') {
      return `"${data}"`;
    }
    return data;
  }

}
