import './App.css';
import MyImage from './CV_photo.jpg';
import ExperienceList from './L38/experience';
import Counter from './L38/counter';
import GitHubRepos from './L39/git_repos';

//Приношу вибачення за відсутність нормального дизайну і сподіваюсь на оцінку це не вплине)
//У найближчих ДЗ обовязково зроблю дизайн наближений до попереднього резюме)))

function Image() {
  return <img src={MyImage} width={300}/>
}

function ListL() {
  return (
    <ul>
    <li>Address</li>
    <div>Lviv, Ukraine</div>
    <li>Phone</li>
    <div>+380682565128</div>
    <li>E-mail</li>
    <div><a href="mailto:ostrovskii.oleh@gmail.com" class="link" target="_blank">ostrovskii.oleh@gmail.com</a></div>
    <li>Facebook</li>
    <div><a href="https://www.facebook.com/profile.php?id=100076318719911" class="link" target="_blank">www.facebook.com/ostrovskyi_o</a></div>
  </ul>
  )
}

function App() {
  return (
    <div>
      <div className='left'>
        <h1>OLEH OSTROVSKYI</h1>
        <div id='image'>
        <Image src={MyImage} />
        </div>
        <div class='leftText'>
        <div class='title'>Contacts</div>
        <ListL />
      <div>
      <GitHubRepos />
      </div>
      </div>
    </div><div className='right'>
        <Counter />
        <div class='title'>Study experience:</div>
        <ExperienceList />
      </div>
    </div>
  );
}

export default App;
