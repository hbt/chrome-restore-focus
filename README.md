# Chrome restore focus 

Restore focus from anywhere in browser (search address bar, devtool inspector/console etc.) back to the document


## How to use it?

```bash
git clone git@github.com:hbt/chrome-restore-focus.git
```

- go to chrome://extensions/
- turn on "developer mode"
- click "load unpacked extension"
- select extension
- at the bottom chrome://extensions/ add keyboard shortcuts e.g Ctrl+E


## How it works?

That's it. After mapping the keyboard shortcut, pressing Ctrl+E will restore the focus.
It works by capturing the focus through a browser action. It does everything very quickly and is not visible (<50ms)



## Known issue

- You may have to tweak the 50ms value in the timeout in chrome-restore-focus/popup.js
If the computer is slow, it would take longer than 50ms. 
Possibly there is a way to enhance this

- There is a lot of jquery, underscore dependencies crap and most of the code is copied my other project. It could use a clean up.

## Why build it?

- view issue in https://superuser.com/questions/324266/google-chrome-mac-set-keyboard-focus-from-address-bar-back-to-page
- https://github.com/philc/vimium/issues/840

## Why is this better?


- it works anywhere in the browser as opposed to the search engine hack 
- it is one keyboard shortcut



