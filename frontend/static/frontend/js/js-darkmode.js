;(function () {

    jnewsDemoDarkMode = function () {
      function getQueryVariable(variable) {
        var query = window.location.search.substring(1)
        var vars = query.split('&')
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split('=')
          if (pair[0] == variable) {
            return pair[1]
          }
        }
        return false
      }

      var dm_request = getQueryVariable('dark-mode')
      if (dm_request === 'true') {
        if (jnewsoption.au_scripts.length) {
          jnews.library.fireOnce()
        }
        var dm_button = jnewsLibrary.globalBody.getElementsByClassName('jeg_dark_mode_toggle')
        if (dm_button[0]) {
          if ( jnewsoption.au_scripts.length ) {
            jnews.library.docReady(function() {
              dm_button[0].checked = true
              jnewsLibrary.triggerEvents(dm_button[0], 'change')
            }, 3000)
          } else {
            setTimeout(function () {
              dm_button[0].checked = true
              jnewsLibrary.triggerEvents(dm_button[0], 'change')
            }, 1500)
          }
        }
      }
    }
  if (isJNewsLibrary) {
    if ('createEvent' in jnewsLibrary.doc) {
      jnewsLibrary.addEvents(jnewsLibrary.doc, {
        DOMContentLoaded: function () {
          jnewsDemoDarkMode()
        },
      })
    } else if ('fireEvent' in jnewsLibrary.doc) {
      jnewsLibrary.addEvents(jnewsLibrary.doc, {
        readystatechange: function () {
          if ('complete' === jnewsLibrary.doc.readyState) {
            jnewsDemoDarkMode()
          }
        },
      })
    }
  }
})()
