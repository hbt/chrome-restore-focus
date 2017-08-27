/**
 * hack to restore focus.
 * window.focus() and document.body.focus() work partially.
 * The focus is restored but it is not responsive until alt+tab is used
 * Could be a bug with GTK or chrome.
 *
 * This hack switches the focus to another tab and restores immediately.
 */
function restoreFocusHack()
{

  function quickSwitch(tabId1, tabId2, callback)
  {
    callback = callback || function()
      {
      };
    chrome.tabs.update(tabId2, {selected: true}, function()
    {
      chrome.tabs.update(tabId1, {selected: true}, callback)
    })
  }

  chrome.tabs.getSelected(function(ct)
  {
    // Note(hbt) id is -1 for dev tools tab
    if(ct && ct.id > 0)
    {
      chrome.tabs.getAllInWindow(ct.windowId, function(tabs)
      {
        if(tabs.length > 1)
        {
          var ftabs = _.filter(tabs, function(v)
          {
            return v.id !== ct.id
          });
          quickSwitch(ct.id, ftabs[0].id)
        }
        else
        {
          chrome.tabs.create({}, function(ntab)
          {
            quickSwitch(ct.id, ntab.id, function()
            {
              chrome.tabs.remove(ntab.id)
            })
          })
        }
      })
    }

  })
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse)
  {
    if(request.action == "restoreFocusHack")
    {
      restoreFocusHack();
    }
  });
