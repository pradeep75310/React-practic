import AdharIteamList from "./adharList";

const staticList = [
    { id: 'Id - 001',imgUrl:'img/imgbc.png', name: 'Name - pradeep', age: 'age-25', address: 'Address - new Delhi', phone: 'Conatct - 9565688759' },
    { id: 'Id - 002',imgUrl:'img/imgbc.png', name: 'Name - Amit', age: 'age-20', address: 'Address - UP', phone: 'Conatct - 7545845896' },
    { id: 'Id - 003',imgUrl:'img/imgbc.png', name: 'Name - Rahul', age: 'age-35', address: 'Address - Punjab', phone: 'Conatct - 9568745895' },
    { id: 'Id - 004',imgUrl:'img/imgbc.png', name: 'Name - Kiran', age: 'age-45', address: 'Address - Kokata', phone: 'Conatct - 85457854586' }
]

function AdharListCom() {

    function iteamData(data) {
        const { id,imgUrl, name, age, address, phone } = data;

        return <AdharIteamList key={id} name={name} age={age} address={address} phone={phone} imgUrl={imgUrl} />
    }

    return (
        <ul>
            {
                staticList.map(iteamData)
            }

        </ul>
    )
}

export default AdharListCom;
