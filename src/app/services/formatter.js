function formatNumber(number) {
  var str = (number | 0).toString();
  var result = '';
  var store = '';
  for (var i = str.length - 1; i >= 0; i--) {
    store = str[i] + store;
    if (store.length === 3) {
      result = store + ' ' + result;
      store = '';
    }
  }
  result = store + ' ' + result;
  return result.trim();
}

function formatMileage(number) {
  return formatNumber(number) + ' km';
}

function formatPrice(number) {
  return formatNumber(number) + ' €';
}

function formatFiscalPower(number) {
  return formatNumber(number) + ' cv';
}

function formatRealPower(number) {
  return formatNumber(number) + ' ch';
}

module.exports = {
  formatMileage: formatMileage,
  formatPrice: formatPrice,
  formatFiscalPower: formatFiscalPower,
  formatRealPower: formatRealPower
};
