(() => {
  
  function createTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    appTitle.classList.add('mb-3', 'mt-3')
    return appTitle;
  }
  
  function createForm() {
    const form = document.createElement('form');
    const field = document.createElement('fieldset');
    const lbl = document.createElement('label');
    const inputName = document.createElement('input');
    const validEr1 = document.createElement('div');
    const validEr2 = document.createElement('div');
    const validEr3 = document.createElement('div');
    const validEr4 = document.createElement('div');
    const validEr5 = document.createElement('div');
    const validEr6 = document.createElement('div');
    const inputSurname = document.createElement('input');
    const inputMidname = document.createElement('input');
    const buttonWrapper = document.createElement('div');
    const button = document.createElement('button');
    
    const fieldDate = document.createElement('fieldset');
    const lblbirth = document.createElement('label');
    const birthDate = document.createElement('input');
    const lblStudyDate = document.createElement('label');
    const studyDate = document.createElement('input');
    const lblFaculty = document.createElement('label')
    const faculty = document.createElement('input');
    
    form.classList.add('form','mb-3', 'row');
    field.classList.add('form-fieldset', 'mb-3');
    lbl.classList.add('form-label');
    lbl.textContent = 'Ф.И.О';
    lbl.setAttribute('for', 'validationServer01');
    inputName.classList.add('form-control', 'mb-3', 'col');
    inputName.id = 'validationServer01';
    inputName.placeholder = 'Введите Имя';
    validEr1.classList.add('error');
    validEr1.textContent = '*Обязательно заполните поле Имя';
    validEr2.classList.add('error');
    validEr2.textContent = '*Обязательно заполните поле Фамилия';
    validEr3.classList.add('error');
    validEr3.textContent = '*Обязательно заполните поле Отчество';
    validEr4.classList.add('error');
    validEr4.textContent = '*Обязательно введите дату рождения';
    validEr5.classList.add('error');
    validEr5.textContent = '*Обязательно введите год начала обучения';
    validEr6.classList.add('error');
    validEr6.textContent = '*Обязательно заполните поле Факультет';
    inputSurname.classList.add('form-control', 'mb-3');
    inputSurname.placeholder = 'Введите Фамилию';
    inputMidname.classList.add('form-control');
    inputMidname.placeholder = 'Введите Отчество';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить студента';
    
    fieldDate.classList.add('form-fieldset', 'mb-3');
    lblbirth.classList.add('form-label');
    lblbirth.textContent = 'Дата рождения';
    lblbirth.setAttribute('for', 'birthDate');
    birthDate.setAttribute('type', 'date');
    birthDate.classList.add('date','mb-3');
    birthDate.id = 'birthDate';
    lblStudyDate.classList.add('form-label');
    lblStudyDate.textContent = 'Год начала обучения'
    lblStudyDate.setAttribute('for', 'studyDate');
    studyDate.setAttribute('type', 'date');
    studyDate.classList.add('date', 'mb-3');
    studyDate.id = 'studyDate';
    lblFaculty.classList.add('form-label')
    lblFaculty.textContent = 'Факультет';
    lblFaculty.setAttribute('for', 'faculty')
    faculty.classList.add('form-control', 'mb-3')
    faculty.placeholder = 'Факультет'
    faculty.id = 'faculty'
    
    buttonWrapper.append(button);
    field.prepend(lbl, inputName, validEr1, inputSurname, validEr2, inputMidname, validEr3);
    fieldDate.prepend(lblbirth, birthDate, validEr4, lblStudyDate, studyDate, validEr5, lblFaculty, faculty, validEr6,);
    form.prepend(field, fieldDate, buttonWrapper );
    
    return {
      button,
      inputName,
      inputSurname,
      inputMidname,
      birthDate,
      studyDate,
      faculty,
      form,
      // validEr1,
      // validEr2,
      // validEr3,
      // validEr4,
      // validEr5,
      // validEr6,
    }
  };
  
  function createTable() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const fullNameth = document.createElement('th');
    const facultyth = document.createElement('th');
    const birthth = document.createElement('th');
    const studyth = document.createElement('th');
    const tbody = document.createElement('tbody');
    
    table.classList.add('table', 'mt-5');
    th.textContent = '#';
    th.setAttribute('scope', 'col');
    fullNameth.textContent = 'Ф.И.О';
    fullNameth.setAttribute('scope', 'col');
    facultyth.textContent = 'Факультет';
    facultyth.setAttribute('scope', 'col');
    birthth.textContent = 'Дата рождения';
    birthth.setAttribute('scope', 'col');
    studyth.textContent = 'Годы обучения';
    studyth.setAttribute('scope', 'col');
    
    tr.prepend(th, fullNameth, facultyth, birthth, studyth);
    thead.prepend(tr);
    table.prepend(thead, tbody);
    
    function createColumn(sthtxt, fullNametdtxt, facultytdtxt, birthtdtxt, studytdtxt) {
      const str = document.createElement('tr');
      const sth = document.createElement('th');
      const fullNametd = document.createElement('td');
      const facultytd = document.createElement('td');
      const birthtd = document.createElement('td');
      const studytd = document.createElement('td');
      
      sth.textContent = `${sthtxt}`;
      sth.setAttribute('scope', 'row');
      fullNametd.textContent = fullNametdtxt;
      facultytd.textContent = facultytdtxt;
      birthtd.textContent = birthtdtxt;
      studytd.textContent = studytdtxt; 
      
      str.prepend(sth, fullNametd, facultytd, birthtd, studytd);
      tbody.append(str)
    };

    return {
      table,
      createColumn
    }
  }
  
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container-sm'); 
    const title = createTitle('Students');
    const form = createForm()
    const table = createTable();
    let count = 0;
    

    container.append(title);
    container.appendChild(form.form);
    container.appendChild(table.table);
    form.form.addEventListener('submit', (e) => {
      e.preventDefault();
      

      const createFullName = `${form.inputName.value} ${form.inputSurname.value} ${form.inputMidname.value}`;
      
      if(createFullName.trim().length >= 11 && form.faculty.value.trim().length > 2 && form.birthDate.value.length > 0 && form.studyDate.value.length > 0) {
        count++
        // birthDate
        let dateAge = form.birthDate.value;
        dateStart = Date.parse(dateAge);
        let now = new Date();
        now = Date.parse(now);
        let age = now - dateStart;
        age = new Date(age).toISOString().substr(0, 4);
        age = Number(age) - 1970;
        dateAge = String(dateAge).split('-').reverse().join('.')
        dateAge = `${dateAge} (${age} лет)`
        // studyDate
        let startStudy = form.studyDate.value;
        startStudyS = Date.parse(startStudy);
        let course = now - startStudyS;
        course = new Date(course).toISOString().substr(0, 4);
        course = (Number(course) - 1970) + 1;
        function checkCourse() {
          if(course > 4) {
            course = 'Закончил';
          } else {
            course += ' курс'
          }
        };
          checkCourse();
        startStudy = String(startStudy).split('-').join('.').substr(0, 4);
        const endStudy = Number(startStudy) + 4;
        const yearStudy = `${startStudy}-${endStudy}`;
        const dateStudy = `${yearStudy} (${course})`
         
        const column = table.createColumn( count, createFullName, form.faculty.value , dateAge, dateStudy);
        
        const input = Array.from(document.querySelectorAll('input'));
        input.map((el) => {
          el.classList.add('mb-3')
        });

        const error = Array.from(document.querySelectorAll('.error'));
        error.map((el) => {
          el.classList.remove('error--active');
        });
      } else {
        const input = Array.from(document.querySelectorAll('input'));
        input.map((el) => {
          el.classList.remove('mb-3')
        });
        const error = Array.from(document.querySelectorAll('.error'));
        error.map((el) => {
          el.classList.add('error--active');
        });
      }
        

    })
  })
  

  
})()