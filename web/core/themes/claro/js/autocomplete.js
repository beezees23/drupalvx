/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.claroAutoCompete = {
    attach: function attach(context) {
      $(context).find('input.form-autocomplete').once('claroAutoComplete').each(function (index, value) {
        var $input = $(value);
        var timeout = 400;
        var classRemoveTimeout;

        var classRemove = function classRemove($autoCompleteElem) {
          $autoCompleteElem.removeClass('is-autocompleting');
          $autoCompleteElem.siblings('[data-drupal-selector="autocomplete-message"]').addClass('hidden');
        };

        $input.on('input autocompletesearch autocompleteresponses', function (event) {
          if (event && event.type && event.type === 'autocompletesearch') {
            $(event.target).addClass('is-autocompleting');
            $(event.target).siblings('[data-drupal-selector="autocomplete-message"]').removeClass('hidden');
          }

          clearTimeout(classRemoveTimeout);
          classRemoveTimeout = setTimeout(classRemove, timeout, $(event.target));
        });
      });
    }
  };
})(jQuery, Drupal);