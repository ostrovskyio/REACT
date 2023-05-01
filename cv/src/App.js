import './App.css';
import MyImage from './CV_photo.jpg';

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

function ListR() {
  return (
  <div>
    <dl>
      <dt>Period:&nbsp;</dt>
      <dd>2018-2022</dd>
      <dt>Position:&nbsp;</dt>
      <dd>Student at Lviv national university Faculty of Law</dd>
      <dt>Description:&nbsp;</dt>
      <dd>Received a Bachelor's degree in Law. Understood, that programming is more interesting than daily paper work</dd>
    </dl><dl>
        <dt>Period:&nbsp;</dt>
        <dd>2022-present time</dd>
        <dt>Position:&nbsp;</dt>
        <dd>Student at Robot_dreams IT-school</dd>
        <dt>Description:&nbsp;</dt>
        <dd>Hope to become JS Developer in the nearest future. I'm sure that the previous message is actually to perform</dd>
      </dl>
  </div>
  )
}




function App() {
  return (
    <div>
      <div className='left'>
      <h1>OLEH OSTROVSKYI</h1>
      <Image src={MyImage} />
      <div>Contacts</div>
      <ListL />
      </div>
      <div className='right'>
      <div>Study experience</div>
      <ListR />
        </div>
    </div>
  );
}

export default App;
