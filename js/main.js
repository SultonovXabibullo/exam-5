document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formni submit qilmaslik uchun

    const modmeId = document.getElementById('modmeId').value;
    const password = document.getElementById('password').value;

    if (modmeId === 'mmm' && password === '123mmm') {
        // Login formani yashirish va savol bo'limini ko'rsatish
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('questionSection').style.display = 'block';
        alert("qanday savol kiritmoqchisiz");
        
        document.getElementById('submitQuestion').addEventListener('click', function() {
            const question = document.getElementById('questionInput').value;

            if(question.trim() !== "") {
                const questionElement = document.createElement('div');
                questionElement.innerText = `Sizning savolingiz: ${question}`;
                document.getElementById('questionOutput').appendChild(questionElement);
                
                // Inputni tozalash
                document.getElementById('questionInput').value = '';
            }
        });
    } else {
        alert('Sizning ID yoki parolingiz noto\'g\'ri');
    }
});