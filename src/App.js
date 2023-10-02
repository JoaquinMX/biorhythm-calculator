import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonItem,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import  {useLocalStorage} from './hooks';
function App() {
  // const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useLocalStorage('birthDate', '');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* <IonItem>
          <IonLabel position='stacked'>Name:</IonLabel>

          <IonInput 
            value={name} 
            onIonChange={(event) => setName(event.detail.value)}
            type='text' 
            placeholder='John Doe'/>
        </IonItem> */}
        {birthDate && <BiorhythmCard birthDate={birthDate} targetDate={targetDate}/>}        
        <IonItem>
          <IonLabel position='stacked'>Date of Birth:</IonLabel> 
          <IonDatetime 
            onIonChange={(event) => setBirthDate(event.detail.value)} 
            displayFormat='DD MMM YYYY' 
            placeholder='15 Dec 2001'
            value={birthDate}
            />
            
        </IonItem>

        <IonItem>
          <IonLabel position='stacked'>Target Date:</IonLabel> 
          <IonDatetime 
            onIonChange={(event) => setTargetDate(event.detail.value)} 
            displayFormat='DD MMM YYYY' 
            placeholder='15 Dec 2022'
            value={targetDate}
            />
            
        </IonItem>

        {/* <p>Name: {name}</p> */}
      </IonContent>

    </IonApp>
  );
}

export default App;
