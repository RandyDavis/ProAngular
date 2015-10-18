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