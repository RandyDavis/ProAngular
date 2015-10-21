/**
 * Created by randy on 10/18/15.
 */
// Listing 14-18

angular.module("exampleApp")
    .filter("labelCase", function () {
        return function (value, reverse) {
            if(angular.isString(value)) {
                var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
                return (reverse ? intermediate[0].toLowerCase() : intermediate[0].toUpperCase()) + intermediate.substr(1);
            } else {
                return value;
            }
        }
    })

    // add "skip" filter for listing14-21
    .filter("skip", function () {
        return function (data, count) {
            if (angular.isArray(data) && angular.isNumber(count)) {
                if (count > data.length || count < 1) {
                    return data;
                } else {
                    return data.slice(count);
                }
            } else {
                return data;
            }
        }
    })

    // add "take" filter for listing14-23
    .filter("take", function ($filter) {
        return function (data, skipCount, takeCount) {
            var skippedData = $filter("skip")(data, skipCount);
            return $filter("limitTo")(skippedData, takeCount);
        }
    })