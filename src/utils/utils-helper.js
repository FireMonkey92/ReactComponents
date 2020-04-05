/* eslint-disable no-undef */
/* globals: window */

import moment from 'moment';
import _ from 'lodash';

export class UtilsHelper {
  static serialize(obj, prefix = false) {
    const str = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const p in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(p)) {
        const k = prefix ? `${prefix}[${p}]` : p;
        const v = obj[p];
        str.push((v !== null && typeof v === 'object')
          ? UtilsHelper.serialize(v, k)
          : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
      }
    }
    return str.join('&');
  }

  static clearPhoneNumber(number) {
    return number.replace(/\D/gi, '');
  }

  static randomStr(length = 7) {
    let i = 0;
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (i; i < length; i += 1) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  static random = length => Math.round(Math.random() * (10 ** length));

  static getWeekRangeByDate(date) {
    const weekNumber = moment(date)
      .isoWeek();
    const yearNumber = moment(date)
      .format('YYYY');

    return UtilsHelper.getWeekRangeByWeekAndYear(weekNumber, yearNumber);
  }

  static getWeekRangeByWeekAndYear(weekNumber, yearNumber) {
    const startDate = moment()
      .year(yearNumber)
      .isoWeek(weekNumber)
      .startOf('isoweek');
    const endDate = moment()
      .year(yearNumber)
      .isoWeek(weekNumber)
      .endOf('isoweek');

    return {
      startDate,
      endDate,
    };
  }

  static numberWithCommas(x) {
    const parts = x.toString()
      .split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  static trimSlashes = url => url && url.replace(/^\/|\/$/g, '');

  static normalizeDividedNumber = (number) => {
    return number - Math.round(number) < 0.015 ? Math.round(number) : number;
  };

  static round = (number, roundTo = 100) => Math.round(number * roundTo) / roundTo;

  static isNumeric = value => !Number.isNaN(value - parseFloat(value));

  static reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  static getNum = (val) => {
    if (Number.isNaN(val) || val === undefined) {
      return 0;
    }
    return parseFloat(val);
  };

  static scrollToTop(scrollDuration = 0) {
    const scrollHeight = window.scrollY;
    const scrollStep = Math.PI / (scrollDuration / 15);
    const cosParameter = scrollHeight / 2;
    let scrollCount = 0;
    let scrollMargin;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        scrollCount += 1;
        scrollMargin = cosParameter - (cosParameter * Math.cos(scrollCount * scrollStep));
        window.scrollTo(0, (scrollHeight - scrollMargin));
      } else clearInterval(scrollInterval);
    }, 15);
  }

  static removeEmptyFields = (object) => {
    return Object.entries(object)
      // eslint-disable-next-line no-unused-vars
      .filter(([key, value]) => {
        if (_.isArray(value)) {
          return !_.isEmpty(value);
        }

        return !!value || value === 0;
      })
      .reduce((acc, [key, value]) => {
        acc[key] = value;

        return acc;
      }, {});
  };

  static normalizeImageUrl = (url, options = { size: 'sm' }) => {
    if (!url) return './images/required/placeholder-product.jpg';
    let size = '&w=320';

    switch (options.size) {
      case 'sm':
        size = '&w=320';
        break;
      case 'xs':
        size = '&h=50';
        break;
      default:
        size = '&w=320';
    }

    return _.first(url.split('&')) + size;
  };

  static milesToKilometers = (miles) => {
    return parseInt(miles) * 1.60934;
  }

  static getMonthsDropdown() {
    let monthArray = [];
    for (let index = 1; index <= moment.months().length; index++) {
      monthArray.push({ value: index, label: moment.monthsShort()[index - 1] })
    }
    return monthArray;
  }

  static getCustomNumberInDropDown(start, end) {
    let dateArray = [];
    for (let index = start; index <= end; index++) {
      dateArray.push({ value: index, label: index })
    }
    return dateArray;
  }

  static getYearDropdown(startYear, endYear) {
    let yearArray = [];
    for (let index = startYear; index <= endYear; index++) {
      yearArray.push({ value: index, label: index })
    }
    return yearArray;
  }

  static getQuery(key) {

    const search = location.search.substring(1);
    const querySplit = search.split("&");
    const queryLength = querySplit.length;

    const data = [];

    for (var i = 0; i < queryLength; i++) {
      data[querySplit[i].split("=")[0]] = querySplit[i].split("=")[1]
    }

    return data[key]
  }
}
