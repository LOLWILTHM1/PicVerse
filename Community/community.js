function openPopup(username, status, message, avatarSrc) {
            const popup = document.getElementById('profilePopup');
            const popupUsername = document.getElementById('popupUsername');
            const popupStatus = document.getElementById('popupStatus');
            const popupMessage = document.getElementById('popupMessage');
            const popupAvatar = document.getElementById('popupAvatar');
            
            popupUsername.textContent = username;
            popupMessage.textContent = message;
            
            // Set avatar background image or create placeholder
            if (avatarSrc && avatarSrc !== '') {
                popupAvatar.style.backgroundImage = `url(${avatarSrc})`;
                popupAvatar.style.backgroundSize = 'cover';
                popupAvatar.style.backgroundPosition = 'center';
            } else {
                // Create a placeholder based on username
                const firstLetter = username.charAt(0).toUpperCase();
                const colors = ['#4a5d6b', '#2d3748', '#38a169', '#e53e3e', '#805ad5', '#3182ce', '#68d391', '#4c51bf', '#9f1239', '#059669'];
                const colorIndex = username.length % colors.length;
                const color = colors[colorIndex];
                
                popupAvatar.style.backgroundImage = `url(https://via.placeholder.com/60x60/${color.substring(1)}/ffffff?text=${firstLetter})`;
                popupAvatar.style.backgroundSize = 'cover';
                popupAvatar.style.backgroundPosition = 'center';
            }
            
            popupStatus.className = `popup-status ${status}`;
            
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closePopup() {
            const popup = document.getElementById('profilePopup');
            popup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        document.addEventListener('DOMContentLoaded', function() {
            const profiles = document.querySelectorAll('.profile');
            
            profiles.forEach(profile => {
                const avatar = profile.querySelector('.avatar');
                avatar.addEventListener('click', function() {
                    const username = profile.dataset.username;
                    const status = profile.dataset.status;
                    const message = profile.dataset.message;
                    const avatarSrc = avatar.src;
                    
                    openPopup(username, status, message, avatarSrc);
                });
            });
        });

        // Close popup when clicking outside
        document.getElementById('profilePopup').addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup();
            }
        });

        // Close popup with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closePopup();
            }
        });