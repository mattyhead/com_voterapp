(function(a){a.extend(a.fn.select2.defaults,{formatNoMatches:function(){return"Geen resultaten gevonden"},formatInputTooShort:function(b,c){var d=c-b.length;return"Vul "+d+" karakter"+(d==1?"":"s")+" meer in"},formatInputTooLong:function(c,b){var d=c.length-b;return"Vul "+d+" karakter"+(d==1?"":"s")+" minder in"},formatSelectionTooBig:function(b){return"Maximaal "+b+" item"+(b==1?"":"s")+" toegestaan"},formatLoadMore:function(b){return"Meer resultaten laden..."},formatSearching:function(){return"Zoeken..."}})})(jQuery);