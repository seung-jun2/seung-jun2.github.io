function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close the modal when clicked outside of it
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function toggleDarkMode() {
    const body = document.body;
    // 다크 모드 토글
    body.classList.toggle('dark-mode');
    // 현재 모드 저장
    const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
}

document.addEventListener('DOMContentLoaded', function() {
    // 페이지 로드 시 저장된 모드 불러오기
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('#navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 동작 방지

            const targetId = this.getAttribute('href'); // 클릭한 링크의 href 속성 값 (섹션 ID)
            const targetSection = document.querySelector(targetId); // 해당 섹션 요소 가져오기

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth' // 부드러운 스크롤링 적용
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(function(skillBar) {
        var percent = skillBar.dataset.percent;
        skillBar.style.width = percent + '%';
    });
});
