import { IonContent, IonHeader, IonItem, IonGrid, IonRow, IonIcon, IonPage, IonTitle, IonToolbar, IonLabel, IonAvatar, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { chevronBackOutline, addCircleOutline } from "ionicons/icons"

const Tab3: React.FC = () => {
  const listTrans = [
    {
      id: 1,
      img: "https://image.flaticon.com/icons/png/512/1807/1807536.png",
      title: "Thanh toan tien com trua",
      time: 'Ngay 30 thang 01',
      money: "20000"
    },
    {
      id: 1,
      img: "https://image.freepik.com/free-vector/location-icon_1083-93.jpg",
      title: "Thanh toan tien gui xe",
      time: 'Ngay 30 thang 01',
      money: "20000"
    },
    {
      id: 1,
      img: 'https://image.freepik.com/free-vector/location-icon_1083-93.jpg',
      title: "Thanh toan tien gui xe",
      time: 'Ngay 30 thang 01',
      money: "3000"
    },
    {
      id: 1,
      img: 'https://image.freepik.com/free-vector/location-icon_1083-93.jpg',
      title: "Thanh toan tien gui xe",
      time: 'Ngay 30 thang 01',
      money: "3000"
    },
    {
      id: 1,
      img: 'https://image.freepik.com/free-vector/location-icon_1083-93.jpg',
      title: "Thanh toan tien gui xe",
      time: 'Ngay 30 thang 01',
      money: "3000"
    },
    {
      id: 1,
      img: 'https://image.freepik.com/free-vector/location-icon_1083-93.jpg',
      title: "Thanh toan tien gui xe",
      time: 'Ngay 30 thang 01',
      money: "3000"
    },
    {
      id: 1,
      img: 'https://image.freepik.com/free-vector/location-icon_1083-93.jpg',
      title: "Thanh toan tien com trua",
      time: 'Ngay 30 thang 01',
      money: "3000"
    },


  ]
  return (
    <IonPage>
      <IonHeader className="">
        <IonToolbar color="primary toolbar_trans">
          <div className="d-flex align-items-center" style={{ justifyContent: "space-between", padding: "1rem" }}>
            <div>
              <IonIcon icon={chevronBackOutline} />
              <IonLabel>Xin chào Huy Cuong</IonLabel>
            </div>
            <img className="img_notify" src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2" />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="money_box ion-align-items-center">
          <IonCol size="6">
            <IonLabel className="money_title">Số dư</IonLabel>
            <p>200 000VND</p>
          </IonCol>
          <IonCol size="6">
            <div className="d-flex" style={{ justifyContent: "flex-end" }}>
              <IonIcon className="icon_plus" icon={addCircleOutline} />
            </div>
          </IonCol>
        </div>
        {listTrans.map((content, index) => (
          <IonItem key={index}>
            <IonGrid>
              <IonRow>
                <IonCol size="2">
                  <img className="img_notify" src={content.img} />
                </IonCol>
                <IonCol size="10">
                  <div>
                    <IonLabel className="title_mail">{content.title}</IonLabel>
                    <div className="d-flex" style={{ justifyContent: "space-between" }}>
                      <p className="time_mail">{content.time}</p>
                      <p className="time_mail">{content.money}</p>

                    </div>
                  </div>
                </IonCol>

              </IonRow>
            </IonGrid>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
