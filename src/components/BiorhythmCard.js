import React from 'react';
import dayjs from 'dayjs';
import {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
} from '@ionic/react';
import { calculateBiorhythms } from '../calculations';
import BiorhythmChart from './BiorhythmChart';
import './BiorhythmCard.css';

function parseDate(isoDateString) {
    return dayjs(isoDateString).format('DD MMM YYYY');
}


const BiorhythmCard = ({ birthDate, targetDate }) => {
  const { physical, emotional, intellectual} = calculateBiorhythms(birthDate, targetDate);
  return (
    <IonCard className='biorhythm-card ion-text-center'>
          <IonCardHeader>
            <IonCardTitle>{parseDate(targetDate)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <BiorhythmChart birthDate={birthDate} targetDate={targetDate}/>
            <p className='physical'>Physical: {physical.toFixed(4)}</p>
            <p className='emotional'>Emotional: {emotional.toFixed(4)}</p>
            <p className='intellectual'>Intellectual: {intellectual.toFixed(4)}</p>
          </IonCardContent>
        </IonCard>
  )
}

export default BiorhythmCard;