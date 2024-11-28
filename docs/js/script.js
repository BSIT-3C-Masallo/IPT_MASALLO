

        function scrollToSection(id) {

            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

        }

        function toggleNav() {

            const sidebar = document.getElementById('sidebar');

            const toggleButton = document.getElementById('toggle-btn');



    

            if (sidebar.style.display === 'block') {

                sidebar.style.display = 'none';

                toggleButton.innerHTML = '☰'; // Change to hamburger icon

            } else {

                sidebar.style.display = 'block';

                toggleButton.innerHTML = '✖'; // Change to close icon

            }

        }

   
