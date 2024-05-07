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
        var percent = parseInt(skillBar.dataset.percent) || 0;
        var skillBarWidth = 300; // 스킬 바의 전체 너비 (예: 200px)
        var width = (percent / 100) * skillBarWidth; // 퍼센트 값을 픽셀로 변환
        skillBar.style.width = width + 'px';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(function(skillBar) {
        var percent = skillBar.dataset.percent;
        skillBar.style.setProperty('--percent', percent / 100);
    });
});

function openEmailModal() {
    document.getElementById('emailModal').style.display = 'block';
}

function closeEmailModal() {
    document.getElementById('emailModal').style.display = 'none';
}

function handleSubmit(event) {
    event.preventDefault(); // 폼이 제출되는 것을 막습니다.

    // 모달을 닫습니다.
    closeEmailModal();

    // 폼 데이터를 가져옵니다.
    var form = document.getElementById('emailForm');
    var formData = new FormData(form);

    // Google Apps Script로 POST 요청을 보냅니다.
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                // 성공 알림을 표시합니다.
                alert('이메일을 성공적으로 보냈습니다.');
            } else {
                // 오류 알림을 표시합니다.
                alert('이메일을 보내는 중에 오류가 발생했습니다.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('이메일을 보내는 중에 오류가 발생했습니다.');
        });
}






