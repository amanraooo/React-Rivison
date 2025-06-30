import './App.css'
import Card from './components/Card';

function App() {
 
  return (
    <div className='outer'>
      <Card   
      name='Aman'
      role='Frontend Dev'
      image='https://randomuser.me/api/portraits/men/1.jpg'
      />
      <Card 
      name='Rohit'
      role='Backend Dev'
      image='https://randomuser.me/api/portraits/men/2.jpg'
      />
      <Card name='Srishti'
      role='Psychologist'
      image='https://randomuser.me/api/portraits/women/3.jpg'
      />
       <Card   
      name='Ravi'
      role='Electrician'
      image='https://randomuser.me/api/portraits/men/4.jpg'
      />
    </div>
  )
}

export default App
