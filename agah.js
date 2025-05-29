(function() {
    
    function initNotification() {
        
        const style = document.createElement('style');
        style.textContent = `
        .notification-container {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 9999;
            max-width: 350px;
            pointer-events: none;
        }

        .notification {
            background: #fff;
            border-radius: 12px;
            padding: 16px 20px;
            margin-bottom: 12px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            border-right: 4px solid #ddd;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            pointer-events: auto;
            transform: translateX(-120%);
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            position: relative;
            overflow: hidden;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333;
            line-height: 1.5;
        }

        .notification.show {
            transform: translateX(0);
            opacity: 1;
        }

        .notification.hide {
            transform: translateX(-120%);
            opacity: 0;
        }

        .notification.success {
            border-right-color: #28a745;
            background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
            color: #155724;
        }

        .notification.error {
            border-right-color: #dc3545;
            background: linear-gradient(135deg, #f8d7da 0%, #f1b0b7 100%);
            color: #721c24;
        }

        .notification.warning {
            border-right-color: #ffc107;
            background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
            color: #856404;
        }

        .notification.info {
            border-right-color: #17a2b8;
            background: linear-gradient(135deg, #d1ecf1 0%, #b8daff 100%);
            color: #0c5460;
        }

        .notification-icon {
            font-size: 20px;
            font-weight: bold;
            flex-shrink: 0;
            margin-top: 2px;
        }

        .notification-content {
            flex: 1;
        }

        .notification-title {
            font-weight: 600;
            margin-bottom: 4px;
            font-size: 14px;
        }

        .notification-message {
            font-size: 13px;
            opacity: 0.9;
        }

        .notification-close {
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.6;
            transition: opacity 0.2s;
            flex-shrink: 0;
        }

        .notification-close:hover {
            opacity: 1;
        }

        .notification-progress {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 3px;
            background: rgba(0,0,0,0.2);
            border-radius: 0 0 12px 12px;
            transform-origin: left;
            animation: progress linear;
        }

        @keyframes progress {
            from { transform: scaleX(1); }
            to { transform: scaleX(0); }
        }
    `;
        document.head.appendChild(style);

        let container = document.querySelector('.notification-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'notification-container';
            document.body.appendChild(container);
        }

        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };

        window.showNotification = function(options) {
            const config = {
                type: 'info',
                title: '',
                message: 'پیام شما',
                duration: 5000,
                closeable: true,
                ...options
            };

            const notification = document.createElement('div');
            notification.className = `notification ${config.type}`;

            let content = `
                <div class="notification-icon">${icons[config.type] || icons.info}</div>
                <div class="notification-content">
            `;
            
            if (config.title) {
                content += `<div class="notification-title">${config.title}</div>`;
            }
            
            content += `<div class="notification-message">${config.message}</div></div>`;
            
            if (config.closeable) {
                content += `<button class="notification-close">×</button>`;
            }

            if (config.duration > 0) {
                content += `<div class="notification-progress" style="animation-duration: ${config.duration}ms;"></div>`;
            }

            notification.innerHTML = content;

            container.appendChild(notification);

            setTimeout(() => {
                notification.classList.add('show');
            }, 100);

            const removeNotification = () => {
                notification.classList.add('hide');
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 400);
            };
            if (config.closeable) {
                const closeBtn = notification.querySelector('.notification-close');
                closeBtn.addEventListener('click', removeNotification);
            }

            if (config.duration > 0) {
                setTimeout(removeNotification, config.duration);
            }

            return {
                element: notification,
                close: removeNotification
            };
        };

        window.showSuccess = function(message, title = 'موفق', duration = 4000) {
            return showNotification({
                type: 'success',
                title: title,
                message: message,
                duration: duration
            });
        };

        window.showError = function(message, title = 'خطا', duration = 6000) {
            return showNotification({
                type: 'error',
                title: title,
                message: message,
                duration: duration
            });
        };

        window.showWarning = function(message, title = 'هشدار', duration = 5000) {
            return showNotification({
                type: 'warning',
                title: title,
                message: message,
                duration: duration
            });
        };

        window.showInfo = function(message, title = 'اطلاعات', duration = 4000) {
            return showNotification({
                type: 'info',
                title: title,
                message: message,
                duration: duration
            });
        };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNotification);
    } else {
        initNotification();
    }

})();
