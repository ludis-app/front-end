import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import UserComponent from '../components/UserComponent';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <table>
         <UserComponent/>
        </table>
        {/* <ExploreContainer name="Tab 3 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
