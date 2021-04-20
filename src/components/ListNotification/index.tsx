import "./ListNotify.css"
import {
    IonItem,
    IonList, IonLabel, IonRow, IonGrid, IonCol, IonIcon, IonText, IonAvatar
} from '@ionic/react';
import { arrowForwardCircle } from "ionicons/icons"
const ListNotification: React.FC = () => {
    const listNotify = [
        {
            id: 1,
            img: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
            title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
            time: "Today, 12:30pm"
        },
        {
            id: 1,
            img: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
            title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
            time: "Today, 12:30pm"
        },
        {
            id: 1,
            img: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
            title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
            time: "Today, 12:30pm"
        },
        {
            id: 1,
            img: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
            title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
            time: "Today, 12:30pm"
        },
        {
            id: 1,
            img: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
            title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
            time: "Today, 12:30pm"
        },
        {
            id: 1,
            img: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
            title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
            time: "Today, 12:30pm"
        },
        {
            id: 1,
            img: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
            title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
            time: "Today, 12:30pm"
        },
        {
            id: 1,
            img: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
            title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
            time: "Today, 12:30pm"
        },
        {
            id: 1,
            img: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
            title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
            time: "Today, 12:30pm"
        },
        {
            id: 1,
            img: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
            title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
            time: "Today, 12:30pm"
        },
        {
            id: 1,
            img: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
            title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
            time: "Today, 12:30pm"
        },
    ]
    return (
        <IonList>
            {listNotify.map((notify, index) => (
                <IonItem key={index}>
                    <IonGrid>
                        <IonRow>
                            <IonAvatar>
                                <img className="img_notify" src={notify.img} />
                            </IonAvatar>
                            <div>
                                <IonLabel className="title_mail">{notify.title}</IonLabel>
                                <p className="time_mail">{notify.time}</p>
                            </div>
                        </IonRow>
                    </IonGrid>
                </IonItem>
            ))}


        </IonList>
    );
};

export default ListNotification;
