# AgahJS 🔔

*Agah* means "aware" in Persian - and that's exactly what this library does: keeps your users beautifully informed.

A lightweight, elegant JavaScript notification library that slides gracefully into the bottom-left corner of your website. Perfect for when you need to tell your users something important without being obnoxious about it.

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)
![Size](https://img.shields.io/badge/size-7KB-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![RTL Support](https://img.shields.io/badge/RTL-supported-orange.svg)

## Why AgahJS? 🤔

Because nobody likes ugly, jarring notifications that feel like they were designed in 2005. AgahJS brings your notifications into the modern age with:

- **Smooth animations** that feel natural, not robotic
- **Beautiful gradients** that don't hurt your eyes
- **Smart positioning** in the bottom-left (because that's where notifications belong)
- **RTL support** for our Persian/Arabic friends
- **Zero dependencies** - just pure, vanilla JavaScript goodness

## ✨ Features That Actually Matter

- 🎨 **Four gorgeous notification types** (success, error, warning, info)
- ⚡ **Lightweight** - Only 5KB, won't slow down your site
- 📱 **Mobile-friendly** - Looks great on phones too
- 🌍 **RTL/LTR support** - Works with any language direction
- 🎛️ **Highly customizable** - Set your own timing, titles, messages
- 🚀 **Dead simple API** - One line of code and you're done
- 🎭 **Smooth animations** - CSS transitions that don't feel cheap

## 🚀 Getting Started

### Quick Install
Just drop this into your HTML:
```html
<script src="https://raw.githubusercontent.com/Daradege/AgahJS/refs/heads/main/agah.js"></script>
```

Or copy-paste the code directly. We don't judge.

### Your First Notification
```javascript
showSuccess('Welcome! You look great today.');
```

That's it. Seriously. One line and your users are informed AND complimented.

## 📖 How to Use It

### The Simple Way (Recommended)
```javascript
// Success - for when things go right
showSuccess('Your changes have been saved!');

// Error - for when things go wrong (it happens)
showError('Oops! Something went sideways.');

// Warning - for when users need a gentle nudge
showWarning('Are you sure about that?');

// Info - for general FYI moments
showInfo('New features are now available!');
```

### The Fancy Way (For Control Freaks)
```javascript
showNotification({
    type: 'success',
    title: 'Mission Accomplished!',
    message: 'Your profile has been updated successfully',
    duration: 8000,      // Show for 8 seconds
    closeable: true      // Let users close it manually
});
```

## 🎯 Complete API Reference

### Main Function: `showNotification(options)`

**Options Object:**
```javascript
{
    type: 'success' | 'error' | 'warning' | 'info',  // Required
    title: 'Optional Title',                          // String (optional)
    message: 'Your message here',                     // String (required)
    duration: 5000,                                   // Number in milliseconds
    closeable: true                                   // Boolean
}
```

**Returns:** An object with:
- `element` - The DOM element (if you need to manipulate it)
- `close()` - Function to close the notification programmatically

### Helper Functions

These are shortcuts for common use cases:

#### `showSuccess(message, title?, duration?)`
```javascript
showSuccess('Data saved successfully!');
showSuccess('Welcome back!', 'Hello there', 3000);
```

#### `showError(message, title?, duration?)`
```javascript
showError('Connection failed');
showError('Invalid input', 'Validation Error', 6000);
```

#### `showWarning(message, title?, duration?)`
```javascript
showWarning('Changes not saved');
showWarning('Low disk space', 'Warning', 7000);
```

#### `showInfo(message, title?, duration?)`
```javascript
showInfo('New update available');
showInfo('Tip: Use Ctrl+S to save', 'Pro Tip', 4000);
```

## 🎨 Customization Examples

### Quick Notification
```javascript
showSuccess('Done!');
```

### Notification with Custom Duration
```javascript
showError('Server error occurred', 'Error', 10000); // Shows for 10 seconds
```

### Non-closeable Notification
```javascript
showNotification({
    type: 'warning',
    message: 'System maintenance in progress...',
    duration: 0,        // Never auto-close
    closeable: false    // Can't be closed manually either
});
```

### Rich Notification
```javascript
showNotification({
    type: 'info',
    title: '🎉 New Feature Alert!',
    message: 'Dark mode is now available in settings. Your eyes will thank you.',
    duration: 12000,
    closeable: true
});
```

## 🎭 Visual Examples

```javascript
// Celebrate user achievements
showSuccess('Level up! You earned 50 points', '🏆 Achievement Unlocked');

// Handle errors gracefully
showError('Could not upload file. Please try again.', '❌ Upload Failed');

// Give helpful warnings
showWarning('You have unsaved changes', '⚠️ Don\'t Forget');

// Share useful information
showInfo('Your session expires in 5 minutes', 'ℹ️ Heads Up');
```

## 🔧 Technical Details

- **Size:** ~5KB minified
- **Dependencies:** None (pure vanilla JS)
- **Browser Support:** All modern browsers (IE11+)
- **Position:** Fixed bottom-left
- **Animation:** CSS transitions with cubic-bezier easing
- **Stacking:** Multiple notifications stack vertically
- **Performance:** Smooth 60fps animations

## 📱 Mobile Considerations

AgahJS automatically adjusts for mobile devices:
- Responsive sizing
- Touch-friendly close buttons
- Proper spacing on small screens

## 🌍 RTL Support

Works perfectly with right-to-left languages:
```javascript
showSuccess('تم حفظ البيانات بنجاح!', 'نجح العمل');
showSuccess('داده‌ها با موفقیت ذخیره شد!', 'موفقیت');
```

## 🎬 Real-World Examples

### Form Validation
```javascript
function validateForm() {
    if (!email.value.includes('@')) {
        showError('Please enter a valid email address');
        return false;
    }
    showSuccess('Form submitted successfully!');
    return true;
}
```

### AJAX Requests
```javascript
fetch('/api/save')
    .then(response => {
        if (response.ok) {
            showSuccess('Your changes have been saved');
        } else {
            showError('Failed to save changes. Please try again.');
        }
    })
    .catch(() => {
        showError('Network error. Check your connection.');
    });
```

### User Onboarding
```javascript
// Welcome sequence
showInfo('Welcome to our app!', '👋 Hello');

setTimeout(() => {
    showInfo('Click the menu button to get started', '💡 Quick Tip');
}, 3000);
```

## 🤝 Contributing

Found a bug? Have an idea? We'd love to hear from you!

1. Fork the repo
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

MIT License - Use it however you want, just don't blame us if your notifications become too beautiful and users can't stop staring at them.

## 💝 Credits

Made with ❤️ for developers who care about user experience.

*AgahJS - Because your users deserve beautiful notifications.*
