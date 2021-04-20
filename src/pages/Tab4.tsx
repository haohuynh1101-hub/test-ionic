import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { chevronBackOutline } from "ionicons/icons"
import ListNotification from "./../components/ListNotification"
import { useState } from 'react';
const Tab4: React.FC = () => {
    const [searchText, setSearchText] = useState("");

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <div style={{ padding: "0 .5rem" }}>
                        <IonIcon icon={chevronBackOutline} />
                        Thông báo
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <ListNotification />
            </IonContent>
        </IonPage>
    );
};

export default Tab4;
