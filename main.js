(() => {
  
  function createTitle(text) {
    let title = document.createElement('h2');
    title.innerHTML = text;
    title.classList.add('col-sm-6','mb-3')
    return title;
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
    
    form.classList.add('form','col-sm-6');
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
      form
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
      sth.classList.add('count');
      fullNametd.textContent = fullNametdtxt;
      facultytd.textContent = facultytdtxt;
      birthtd.textContent = birthtdtxt;
      studytd.textContent = studytdtxt; 
      
      str.prepend(sth, fullNametd, facultytd, birthtd, studytd);
      tbody.append(str);

      return {
        str
      }
    };
    const thObj = {
      th,
      fullNameth,
      facultyth,
      birthth,
      studyth
     }
    return {
      table,
      createColumn,
      thObj,
      tbody
    }
  }
  
  function createFilter() {
    const filter = document.createElement('form');
    const lblName = document.createElement('label');
    const searchName = document.createElement('input');
    const lblFaculty = document.createElement('label');
    const searchFaculty = document.createElement('input');
    const lblStartStudy = document.createElement('label');
    const startStudy = document.createElement('input');
    const lblEndStudy = document.createElement('label');
    const endStudy = document.createElement('input');

    filter.classList.add('filter','col-sm-6');
    lblName.classList.add('form-label');
    lblName.textContent = 'Поиск по Ф.И.О';
    searchName.classList.add('form-control', 'mb-3');
    searchName.placeholder = 'Ф.И.О';
    lblFaculty.classList.add('form-label');
    lblFaculty.textContent = 'Поиск по Факультету';
    searchFaculty.classList.add('form-control', 'mb-3');
    searchFaculty.placeholder = 'Факультет';
    lblStartStudy.classList.add('form-label');
    lblStartStudy.textContent = 'Поиск по году начала обучения';
    startStudy.classList.add('form-control', 'mb-3');
    startStudy.placeholder = 'Год начала обучения';
    startStudy.setAttribute('type', 'number');
    lblEndStudy.classList.add('form-label');
    lblEndStudy.textContent = 'Поиск по году окончания обучения';
    endStudy.classList.add('form-control', 'mb-3');
    endStudy.placeholder = 'Год окончания обучения';
    endStudy.setAttribute('type', 'number');

    filter.prepend(lblName, searchName, lblFaculty, searchFaculty, lblStartStudy, startStudy, lblEndStudy, endStudy);
    
    return {
      filter,
      searchName,
      searchFaculty,
      startStudy,
      endStudy
    }
  }

  
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container-sm'); 
    const sectionForms = document.createElement('section');
    sectionForms.classList.add('row')
    const formTitle = createTitle('Добавить студента');
    const filterTitle = createTitle('Фильтр Студентов');
    const form = createForm();
    const filter = createFilter();
    const table = createTable();
    const ThObject = table.thObj;
    let info = [] ;
    let count = info.length;
    const sessionId = 'Table.html';
    let defaultItems = [] ;

    filter.searchName.addEventListener('keyup', () => {
      let clonInfo;
      clonInfo = info.filter(student => {
        const studentLow = student.createFullName.toLowerCase();
        if(studentLow.includes(filter.searchName.value.toLowerCase())) {
         return true
        };
      })
      // deleting columns
      const tableBody = table.tbody;
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
      };
      // creating columns
      for(let item of clonInfo) {table.createColumn(item.count, item.createFullName, item.faculty, item.dateAge, item.dateStudy)};
    });
    filter.searchFaculty.addEventListener('keyup', () => {
      let clonInfo;
      clonInfo = info.filter(fc => {
        const fcLow = fc.faculty.toLowerCase();
        if(fcLow.includes(filter.searchFaculty.value.toLowerCase())) {
          return true
        };
      })
      // deleting columns
      const tableBody = table.tbody;
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
      };
      // creating columns
      for(let item of clonInfo) {table.createColumn(item.count, item.createFullName, item.faculty, item.dateAge, item.dateStudy)};
    });
    filter.startStudy.addEventListener('keyup', () => {
      let clonInfo;
      clonInfo = info.filter(year => {
        startYear = year.dateStudy.substr(0,3);
        if(startYear.includes(filter.startStudy.value)) {
          return true
        }
      })
      // deleting columns
      const tableBody = table.tbody;
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
      };
      // creating columns
      for(let item of clonInfo) {table.createColumn(item.count, item.createFullName, item.faculty, item.dateAge, item.dateStudy)};
    });
    filter.endStudy.addEventListener('keyup', () => {
      let clonInfo;
      clonInfo = info.filter(year => {
        endYear = year.dateStudy.substr(5,);
        if(endYear.includes(filter.endStudy.value)) {
          return true
        }
      });
      console.log(year.dateStudy.substr(5,10))
      // deleting columns
      const tableBody = table.tbody;
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
      };
      // creating columns
      for(let item of clonInfo) {table.createColumn(item.count, item.createFullName, item.faculty, item.dateAge, item.dateStudy)};
    })
    
    ThObject.th.addEventListener('click', () => {
      info.sort((a,b) => a.count > b.count ? 1 : -1);
      storage(sessionId, info);
      // deleting colunms
      const tableBody = table.tbody;
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
      };
      // creating new colunms
      let storageItems = storage(sessionId);
      let sessionItems = (storageItems.length == 0) ? defaultItems : storageItems;
      for(let item of sessionItems) {table.createColumn(item.count, item.createFullName, item.faculty, item.dateAge, item.dateStudy)};
    
    });
    ThObject.fullNameth.addEventListener('click', () => {
      info.sort((a,b) => a.createFullName > b.createFullName ? 1 : -1);
      storage(sessionId, info);
      // deleting colunms
      const tableBody = table.tbody;
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
      };
      // creating new colunms
      let storageItems = storage(sessionId);
      let sessionItems = (storageItems.length == 0) ? defaultItems : storageItems;
      for(let item of sessionItems) {table.createColumn(item.count, item.createFullName, item.faculty, item.dateAge, item.dateStudy)};
    
    });
    ThObject.facultyth.addEventListener('click', () => {
      info.sort((a,b) => a.faculty > b.faculty ? 1 : -1);
      storage(sessionId, info);
      // deleting colunms
      const tableBody = table.tbody;
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
      };
      // creating new colunms
      let storageItems = storage(sessionId);
      let sessionItems = (storageItems.length == 0) ? defaultItems : storageItems;
      for(let item of sessionItems) {table.createColumn(item.count, item.createFullName, item.faculty, item.dateAge, item.dateStudy)};
    
    });
    ThObject.birthth.addEventListener('click', () => {
      info.sort((a,b) => {
        let ageA = Date.parse(a.dateAge.substr(0,10).split('.').reverse().join('-'));
        let ageB = Date.parse(b.dateAge.substr(0,10).split('.').reverse().join('-'));
        return (ageA > ageB) ? -1 : 1;
      })
      storage(sessionId, info);
      // deleting colunms
      const tableBody = table.tbody;
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
      };
      // creating new colunms
      let storageItems = storage(sessionId);
      let sessionItems = (storageItems.length == 0) ? defaultItems : storageItems;
      for(let item of sessionItems) {table.createColumn(item.count, item.createFullName, item.faculty, item.dateAge, item.dateStudy)};
    
      });
    ThObject.studyth.addEventListener('click', () => {
      info.sort((a,b) => {
        let studyA = a.dateStudy.substr(0,4);
        let studyB = b.dateStudy.substr(0,4);
        return (studyA > studyB) ? -1 : 1;
      })
      storage(sessionId, info);
      // deleting colunms
      const tableBody = table.tbody;
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
      };
      // creating new colunms
      let storageItems = storage(sessionId);
      let sessionItems = (storageItems.length == 0) ? defaultItems : storageItems;
      for(let item of sessionItems) {table.createColumn(item.count, item.createFullName, item.faculty, item.dateAge, item.dateStudy)};
    
    });
    
    sectionForms.prepend(formTitle, filterTitle, form.form, filter.filter);
    container.prepend(sectionForms ,table.table);
    
    function storage(name, value) {
      return (value) ? localStorage.setItem(name, JSON.stringify(value)) : JSON.parse(localStorage.getItem(name)) || [];
    }
    
    form.form.addEventListener('submit', (e) => {
      e.preventDefault();
      count++
      
      const createFullName = `${ form.inputName.value.substr(0, 1).toUpperCase() + form.inputName.value.substr(1) } ${form.inputSurname.value} ${form.inputMidname.value}`;
      
      if(createFullName.trim().length >= 11 && form.faculty.value.trim().length > 2 && form.birthDate.value.length > 0 && form.studyDate.value.length > 0) {

        // faculty
        let faculty = form.faculty.value
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
        const dateStudy = `${yearStudy} (${course})`;
        // creating Column
        const column = table.createColumn( count, createFullName, faculty, dateAge, dateStudy);
        // info push
        info.push({count, createFullName, faculty, dateAge, dateStudy});
        storage(sessionId, info);

        const input = Array.from(document.querySelectorAll('fieldset input'));
        input.map((el) => {
          el.classList.add('mb-3')
        });

        const error = Array.from(document.querySelectorAll('.error'));
        error.map((el) => {
          el.classList.remove('error--active');
        });
      } else {
        const input = Array.from(document.querySelectorAll('fieldset input'));
        input.map((el) => {
          el.classList.remove('mb-3')
        });
        const error = Array.from(document.querySelectorAll('.error'));
        error.map((el) => {
          el.classList.add('error--active');
        });
      }
    })
    // storage getter: return items
    let storageItems = storage(sessionId);
    // refreshing info and count
    info = storageItems;
    count = info.length;
    // restore session
    let sessionItems = (storageItems.length == 0) ? defaultItems : storageItems;
    for(let item of sessionItems) {table.createColumn(item.count, item.createFullName, item.faculty, item.dateAge, item.dateStudy)};
    
  })
  

  
})()