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
    const inputSurname = document.createElement('input');
    const inputMidname = document.createElement('input');
    const buttonWrapper = document.createElement('div');
    const button = document.createElement('button');

    const fieldDate = document.createElement('fieldset');
    const lblbirth = document.createElement('label');
    const birthDate = document.createElement('input');
    const lblStudyDate = document.createElement('label');
    const studyDate = document.createElement('input');
    lblFaculty = document.createElement('label')
    const faculty = document.createElement('input');

    form.classList.add('form','mb-3', 'row');
    field.classList.add('form-fieldset', 'mb-3');
    lbl.classList.add('form-label');
    lbl.textContent = 'Ф.И.О';
    lbl.setAttribute('for', 'validationServer01');
    inputName.classList.add('form-control', 'mb-3', 'col');
    inputName.id = 'validationServer01';
    inputName.placeholder = 'Введите Имя';
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
    field.prepend(lbl, inputName, inputSurname, inputMidname, );
    fieldDate.prepend(lblbirth, birthDate, lblStudyDate, studyDate, lblFaculty, faculty);
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
  
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container-sm'); 
    const title = createTitle('Students');
    const form = createForm().form 
    
    container.append(title);
    container.appendChild(form);
  })
  

  
})()