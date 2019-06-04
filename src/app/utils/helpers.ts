import { DataQuery } from '../interfaces/query';
import { SpecificTypes } from '../interfaces/specific-types.enum';

export class Helpers {

  queryBuilder(dataQuery: DataQuery) {
    const query = {
      query: `
        ${dataQuery.type} {
          ${dataQuery.operation} ${this.queryOptions(dataQuery.type, dataQuery.data, dataQuery.id)} {
            ${dataQuery.fields.join(',')}
          }
        }
      `,
      variables: ''
    };
    return query;
  }

  private queryOptions(specificType: string, data: {} = {}, id = '') {
    if (specificType === SpecificTypes.GET_ID || specificType === SpecificTypes.DELETED) {
      return `(_id: "${id}")`;
    } else if (specificType === SpecificTypes.UPDATED) {
      return `(_id: "${id}", input: {
        ${this.inputBuilder(data)}
      }`;
    } else if (specificType === SpecificTypes.CREATED) {
      return `(input: {
        ${this.inputBuilder(data)}
      }`;
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
